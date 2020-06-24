import { gql } from "apollo-boost"

const POKEMON_QUERY = gql`
    query Pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            number
            height {
                maximum
                minimum
            }
            weight {
                maximum
                minimum
            }
            classification
            types
            resistant
            weaknesses
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
            fleeRate
            maxCP
            maxHP
            evolutions {
                name
                number
                image
                types
            }
            evolutionRequirements {
                amount
                name
            }
            image
        }
    }
`
export default POKEMON_QUERY