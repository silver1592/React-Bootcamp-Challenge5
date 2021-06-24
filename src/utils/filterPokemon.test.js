import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    /* Your solution comes here */
    const result = filterPokemon(mockPokemonsData, "");

    expect(Array.isArray(result)).toBe(true);
  });

  test("it should return an empty array", () => {
    /* Your solution comes here */
    const result = filterPokemon(mockPokemonsData, "");
    expect(result).toEqual([]);
  });

  test("it should return an array with charizard object", () => {
    /* Your solution comes here */
    const result = filterPokemon(mockPokemonsData, "charizard");
    expect(result).toContain(mockPokemonsData[0]);
  });

  // /* BUNUS */
  // test("it should validate the 'pokeList' argument", () => {
  //   /* Your solution comes here */
  //   expect(false).toBe(true);
  // });

  // test("it should validate the 'name' argument", () => {
  //   /* Your solution comes here */
  //   expect(false).toBe(true);
  // });
});
