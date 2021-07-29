import axios from "axios";

const getData = async (inputQuery: string) => {
  return await axios({
    url: "https://beta.pokeapi.co/graphql/v1beta",
    method: "post",
    data: {
      query: inputQuery,
    },
  }).then((result) => {
    return result.data;
  });
};

export default getData;
