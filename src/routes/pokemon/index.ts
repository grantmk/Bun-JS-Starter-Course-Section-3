import { Elysia, t } from "elysia";
import { createPokemon, getAllPokemon, getPokemon } from './handlers';

const pokemonRoutes = new Elysia({ prefix: '' })
  .get('/', () => getAllPokemon)
  .get('/:id', ({ params: { id } }) => getPokemon(id))
  .post('/', ({ body }) => createPokemon(body), {
    body: t.Object({
      name: t.String({
        minLength: 3,
        maxLength: 50,
      }),
      level: t.String({
        minLength: 3,
        maxLength: 50,
      }),
    })
  })
  .patch('/:id', () => 'Update Pokemon')
  .delete('/', () => 'Delete Pokemon');


export default pokemonRoutes;