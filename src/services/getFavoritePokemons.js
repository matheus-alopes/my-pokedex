import interrogation from "../assets/images/interrogation.png"

async function getPokemonDescription(url) {
    const descriptionResponse = await fetch(url);

    const descriptionData = await descriptionResponse.json();

    const listOfDescriptions = descriptionData.flavor_text_entries;

    for(let i = 0; i <= listOfDescriptions.length; i++) {
        if (listOfDescriptions[i]) {
            if(listOfDescriptions[i].language.name == "en") {
                let description = listOfDescriptions[i].flavor_text;
    
                const filteredDescription = description.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g, " "); //filtrando o texto, para não ter caracteres especiais
    
                const pokemonDescription = filteredDescription.replace(/[/é]/g, "É"); //filtrando a descrição final, para ter o caractere "é" em maiúsculo
    
                return pokemonDescription;
            }
        } else {
            for(let i = 0; i <= descriptionData.genera.length; i++) {
                if(descriptionData.genera[i].language.name == "en") {
                    let description = descriptionData.genera[i].genus;
    
                    const pokemonDescription = description.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g, " "); //filtrando o texto, para não ter caracteres especiais
        
                    return pokemonDescription;
                }

                if(!descriptionData.genera) {
                    const pokemonDescription = "No data yet."

                    return pokemonDescription
                }
            }
        }
    }
}

async function getFavoritePokemonsDetails(favoritePokemonsIds) {
    const favoritePokemonsArray = await Promise.all(
        favoritePokemonsIds.map (
            async pokemonId => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
            
                const data = await response.json();
            
                const descriptionUrl = data.species.url;
            
                const pokemonDescription = await getPokemonDescription(descriptionUrl);
                
                const pokemon = {
                    name: data.name,
                    id: pokemonId,
                    type: data.types,
                    description: pokemonDescription,
                }

                if(data.sprites.front_default) {
                    const pokemonImage = data.sprites.front_default;
            
                    pokemon.image = pokemonImage;
                } else {
                    const pokemonImage = data.sprites.other["official-artwork"].front_default;
            
                    pokemon.image = pokemonImage;
                }
            
                if(pokemon.image == null) {
                    pokemon.image = interrogation;
                }

                return pokemon
            }
        )
    )

    return favoritePokemonsArray
}

export {getFavoritePokemonsDetails}