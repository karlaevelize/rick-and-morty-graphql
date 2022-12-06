import { useQuery, gql } from "@apollo/client";

export const CharacterDetails = () => {
  //
  const getCharacter = gql`
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

  const { loading, error, data } = useQuery(getCharacter, {
    variables: { characterId: 1 },
  });

  console.log("data", data);

  return (
    <div>
      <p>Details Page</p>
    </div>
  );
};
