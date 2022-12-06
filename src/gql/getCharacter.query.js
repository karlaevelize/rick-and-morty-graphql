import { gql } from "@apollo/client";

export const getCharacter = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      created
      name
      species
      status
      type
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;
