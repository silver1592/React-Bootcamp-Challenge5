export default function filterPokemon(pokeList, name) {
  if (name === "") return [];
  return (
    Array.isArray(pokeList) &&
    pokeList.filter((pokemon) => {
      return pokemon.name.includes(name);
    })
  );
}
