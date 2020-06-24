import ApolloClient, { InMemoryCache } from "apollo-boost";
const pokemonClient = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
  cache: new InMemoryCache(),
});
export default pokemonClient;
