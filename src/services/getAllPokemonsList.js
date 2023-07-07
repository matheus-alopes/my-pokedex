async function getAllPokemonsList() {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const response = await fetch(url);

    const data = await response.json();

    const amountOfPokemon = data.count;

    const allPokemonsList = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${amountOfPokemon}`);

    const allPokemonsData = await allPokemonList.json();

    await console.log(allPokemonsData);

    return allPokemonsData
}

export { getAllPokemonsList }