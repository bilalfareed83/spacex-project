import React, { PropsWithChildren } from "react";
import { LaunchListQuery } from "../../generated/graphql";
import "./style.css";

export interface OwnProps {
  handleIdChange: (neId: number) => void;
}

export interface OwnProp {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProp {
  data: LaunchListQuery;
}
const className = "LaunchList";

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => {
  return (
    <div className={className}>
      <h3>Launches</h3>
      <ol className={`${className}__list`}>
        {!!data &&
          data.launches?.map(
            (launch, i) =>
              !!launch && (
                <li
                  key={i}
                  className={`${className}__item`}
                  onClick={() => handleIdChange(launch.flight_number!)}
                >
                  {launch.mission_name}({launch.launch_year})
                </li>
              )
          )}
      </ol>
    </div>
  );
};

export default LaunchList;
