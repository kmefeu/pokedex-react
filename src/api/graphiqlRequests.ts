import axios from "axios";

const getData = (inputQuery: string) => {
  axios({
    url: "https://beta.pokeapi.co/graphql/v1beta",
    method: "post",
    data: {
      query: inputQuery,
    },
  }).then((result) => {
    console.log(result.data);
  });
};

export default getData;
