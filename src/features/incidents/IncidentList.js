import React from "react";
import labels from "../../app/detailStatusLabels";
// import { useSelector } from 'react-redux';
import IncidentFilterList from "./IncidentFilterList";
import IncidentListCategories from "./IncidentListCategories";

const IncidentList = (props) => {
  const { statuses } = labels;
  return (
    <>
      {statuses.map((status) => {
        return (
          <IncidentListCategories
            key={status.uid}
            header={status.label}
            state={props.state}
            error={props.error}
          >
            <IncidentFilterList
              filterQuery={status.label}
              state={props.state}
              error={props.error}
            />
          </IncidentListCategories>
        );
      })}
    </>
  );
};

export default IncidentList;
