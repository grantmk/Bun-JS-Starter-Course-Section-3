import { NotFoundError } from "elysia";

export async function getAllPokemon() {
  try {
    return "An array of HTML formatted pokemon"
  } catch (e: unknown) {
    console.error(`Error getting pokemon: ${e}`);
  }
}

export async function getPokemon(id: string) {
  try {
    const pokemon = null // "{ name: Charizard }"
    if (!pokemon) {
      throw new NotFoundError('Pokemon not found.');
    } else {
      return pokemon;
    }

  } catch (e: unknown) {
    console.error(`Error finding pokemon: ${e}`);
    return "Pokemon not found!"
  }
}

export async function createPokemon(body: any) {
  try {
    const { name, level } = body;
    return "Level: " + level + " Pokemon created. Name: " + name
  } catch (e: unknown) {
    console.error(`Error creating pokemon: ${e}`);
  }
}
