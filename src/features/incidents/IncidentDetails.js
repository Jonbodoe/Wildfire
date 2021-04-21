import React, { useLayoutEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
// import { withStyles } from '@material-ui/core/styles';
import DetailsContainer from "../../components/DetailsContainer";
import DetailsBlock from "../../components/DetailsBlock";
import DetailsHeader from "../../components/DetailsHeader";
import { useSelector, useDispatch } from "react-redux";
import isEmpty from "lodash/isEmpty";
import {
  selectIncident,
  getIncidentDetailBlocks,
  select,
} from "../../app/reducers/incidents/incidentSlice";
import DetailsTable from "../../components/DetailsTable";
// import DetailsSelect from '../../components/DetailsSelect';
// import labels from '../../app/detailStatusLabels';
import IncidentFormFields from "./IncidentFormFields";
import LoadingBar from "../../components/LoadingBar";

const IncidentDetails = (props) => {
  // const classes = useStyles();
  let { url } = useRouteMatch();

  const { incidents } = props;
  const isLoaded = !isEmpty(incidents);
  const [loading, setloading] = useState(isLoaded);
  const { incidentId } = useParams();
  const dispatch = useDispatch();
  const selectedId = useSelector(selectIncident);
  // const selectCase = useSelector(getSelectedCase);
  const detailBlocks = useSelector(getIncidentDetailBlocks);

  const selectedIncident = incidents.find(
    (incident) => !incident._id.indexOf(selectedId)
  );
  // Remove? since in redux store.

  useLayoutEffect(() => {
    setloading(!isLoaded ? true : false);
    if (!selectedId) {
      dispatch(select(incidentId));
    }
    // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
    // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
  }, [selectedId, selectedIncident, isLoaded, incidentId, dispatch]);

  if (!selectedIncident) {
    return null;
  }
  // If the incident is not selected, return early to prevent re-renders

  const { _id, geographics, incident } = selectedIncident;
  const [incidentInfo] = detailBlocks;
  const [IncidentInformation, AreasAffected] = incidentInfo.incidentDetails;
  // console.log(IncidentInformation, AreasAffected, )
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
