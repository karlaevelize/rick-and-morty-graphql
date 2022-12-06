import { useQuery, gql } from "@apollo/client";
import { getCharacters } from "../gql";

export const Homepage = () => {
  const { loading, error, data } = useQuery(getCharacters);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div>Homepage</div>;
};
