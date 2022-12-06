import { useQuery, gql } from "@apollo/client";
import { getCharacter } from "../gql/getCharacter.query";

export const CharacterDetails = ({ id }) => {
  const { loading, error, data } = useQuery(getCharacter, {
    variables: { characterId: 1 },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <p>Details Page</p>
    </div>
  );
};
