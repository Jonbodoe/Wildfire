import React, { useLayoutEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import DetailsContainer from "../../components/DetailsContainer";
import DetailsBlock from "../../components/DetailsBlock";
import DetailsHeader from "../../components/DetailsHeader";
import { useSelector, useDispatch } from "react-redux";
import isEmpty from "lodash/isEmpty";
import {
  getIncidentDetailBlocks,
  select,
  getSelectedIncident,
} from "../../app/reducers/incidents/incidentSlice";
import DetailsTable from "../../components/DetailsTable";
import IncidentFormFields from "./IncidentFormFields";
import LoadingBar from "../../components/LoadingBar";

const IncidentDetails = (props) => {
  const { incidents } = props;
  const isLoaded = !isEmpty(incidents);

  const [loading, setloading] = useState(isLoaded);
  const { url } = useRouteMatch();
  const { incidentId } = useParams();
  const dispatch = useDispatch();
  const detailBlocks = useSelector(getIncidentDetailBlocks);
  const selectedIncident = useSelector(getSelectedIncident);

  useLayoutEffect(() => {
    setloading(!isLoaded ? true : false);
      dispatch(select(incidentId));

    // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
    // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
  }, [selectedIncident, isLoaded, incidentId, dispatch]);

  if (!selectedIncident) {
    return null;
  }
  // If the incident is not selected, return early to prevent re-renders

  const { _id, geographics, incident } = selectedIncident;
  const [incidentInfo] = detailBlocks;
  const [IncidentInformation, AreasAffected] = incidentInfo.incidentDetails;
  // To deconstruct the array for easier use

  return (
    <DetailsContainer query={!loading && isLoaded ? incident.status : ""}>
      {!loading ? (
        <>
          <DetailsHeader header={`Incident: ${geographics.municipal}`} />
          <DetailsBlock
            title={IncidentInformation.title}
            detailRows={IncidentInformation.rows}
          />
          <DetailsBlock title={`Incident Cases`}>
            <DetailsTable
              data={incident.cases}
              linkAccessors={"zip_code"}
              path={`${url}/case`}
              // base url to have links within the table rows.
              allowedKeys={[
                "zip_code",
                "initial_time",
                "volume_traffic",
                "reviewed",
              ]}
              // for filtering specific data properties
              tableHeader={[
                "Zip Code",
                "Initial Time",
                "Volume Traffic",
                "Review",
              ]}
            />
          </DetailsBlock>
          <DetailsBlock
            title={AreasAffected.title}
            detailRows={AreasAffected.rows}
          />
          <DetailsBlock title={`Incident Progress`}>
            <IncidentFormFields data={incident} id={_id} />
          </DetailsBlock>
        </>
      ) : (
        <LoadingBar />
      )}
    </DetailsContainer>
  );
};

export default IncidentDetails;
