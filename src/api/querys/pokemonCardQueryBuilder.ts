export const pokemonCardQueryBuilder = (base: number, offset: number) => {
  return (
    `{
    pokemon_v2_pokemon(limit: ` +
    offset +
    `, offset: ` +
    base +
    `) {
          name
          id
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `
  );
};

export default pokemonCardQueryBuilder;
