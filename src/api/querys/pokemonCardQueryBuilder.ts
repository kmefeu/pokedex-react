export const pokemonCardQueryBuilder = (
  queryOffsetBase: number,
  queryOffsetTarget: number
) => {
  return (
    `{
    pokemon_v2_pokemon(limit: ` +
    queryOffsetTarget +
    `, offset: ` +
    queryOffsetBase +
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
