import { useQuery, gql } from "@apollo/client";

const getCharacters = gql`
  query Characters {
    characters {
      results {
        name
        image
      }
    }
  }
`;

export const Homepage = () => {
  const { loading, error, data } = useQuery(getCharacters);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div>Homepage</div>;
};
