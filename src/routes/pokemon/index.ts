import { Elysia, t } from "elysia";
import { createPokemon, getAllPokemon, getPokemon } from './handlers';

const pokemonRoutes = new Elysia({ prefix: '' })
  .get('/', () => getAllPokemon)
  .get('/:id', ({ params: { id } }) => getPokemon(id))
  .post('/', ({ body }) => createPokemon(body))
  .patch('/:id', () => 'Update Pokemon')
  .delete('/', () => 'Delete Pokemon');


export default pokemonRoutes;
