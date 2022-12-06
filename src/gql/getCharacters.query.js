import { gql } from "@apollo/client";

export const getCharacters = gql`
  query Characters {
    characters {
      results {
        name
        image
      }
    }
  }
`;
