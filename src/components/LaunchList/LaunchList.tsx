import React from "react";
import { LaunchListQuery } from "../../generated/graphql";

interface Props {
  data: LaunchListQuery;
}

const className = "LaunchList";

const LaunchList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.launches?.map((launch, ind) => {
        return (
          <div>
            <li key={ind}>{launch?.mission_name}</li>
          </div>
        );
      })}
    </div>
  );
};

export default LaunchList;
