export const pokemonBioQueryBuilder = (id: number) => `{
  pokemon_v2_pokemon(where: {id: {_eq: ${id}}, pokemon_v2_pokemonstats: {}}) {
    id
    name
    weight
    height
    pokemon_v2_pokemonspecy {
      pokemon_v2_pokemonspecies {
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies_aggregate {
            nodes {
              id
            }
          }
        }
        pokemon_v2_pokemonspeciesflavortexts(offset: 0, limit: 1) {
          flavor_text
        }
      }
    }
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }

}
`;
