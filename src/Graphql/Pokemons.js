import { gql } from 'apollo-boost'

const POKEMONS_QUERY = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      image
      types
      classification
    }
  }
`
export default POKEMONS_QUERY