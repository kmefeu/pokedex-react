export const allPokemonCardQuery = `{
pokemon_v2_pokemon(limit: 1050, offset: 0) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;
