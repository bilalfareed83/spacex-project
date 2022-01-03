import React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface Props {
  id: number;
}

const LaunchProfileCountainer: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  if (loading) return <h2>loading...</h2>;

  if (error) return <h2>Error</h2>;

  if (!data) return <div>Select flight from panel</div>;

  // console.log(data);

  return (
    <div>
      <LaunchProfile data={data} />
    </div>
  );
};

export default LaunchProfileCountainer;
