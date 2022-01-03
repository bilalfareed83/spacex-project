import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";

interface Props {
  handleIdChange: (newId: number) => void;
}

const LaunchListContainer: React.FC<Props> = ({ handleIdChange }) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) return <h2>loading</h2>;
  if (error || !data) return <h2>error;</h2>;

  console.log(data);

  return <LaunchList data={data} handleIdChange={handleIdChange} />;
};

export default LaunchListContainer;
