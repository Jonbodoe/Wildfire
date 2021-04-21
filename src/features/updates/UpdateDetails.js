import React, { useLayoutEffect, useState } from "react";
import DetailsContainer from "../../components/DetailsContainer";
// import { withStyles } from '@material-ui/core/styles';
// import { LinearProgress } from '@material-ui/core';
import DetailsBlock from "../../components/DetailsBlock";
// import DetailsTitle from '../../components/DetailsTitle';
// import DetailsContent from '../../components/DetailsContent';
import DetailsHeader from "../../components/DetailsHeader";
// import DetailsUser from '../../components/DetailsUser';
// import { Divider} from '@material-ui/core';
import { useParams } from "react-router";
import {
  getSelectedUpdate,
  getUpdateId,
  getUpdatesDetailBlocks,
  selectUpdate,
} from "../../app/reducers/updates/updateSlice";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import LoadingBar from "../../components/LoadingBar";
import UserBlock from "../../components/UserBlock";
import { Divider } from "@material-ui/core";
import DetailsTable from "../../components/DetailsTable";

const UpdateDetails = (props) => {
  const { updates, profiles, incidents } = props;
  const { updateId } = useParams();
  const selectedId = useSelector(getUpdateId);
  const isLoaded = !isEmpty(updates);
  const [loading, setloading] = useState(isLoaded);
  const selectedUpdate = useSelector(getSelectedUpdate);
  const updateDetailBlocks = useSelector(getUpdatesDetailBlocks);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setloading(!isLoaded ? true : false);
    if (!selectedId) {
      dispatch(selectUpdate(updateId));
    }
    // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
    // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
  }, [selectedId, isLoaded, updateId, dispatch]);
  // console.log(selectedId,'the id');

  if (!isLoaded || isEmpty(profiles)) {
    return null;
  }
  // Returns early if data is not found
  const [update] = updateDetailBlocks;
  const [updateTime, updateInformation] = update.updateDetails;
  const updateProfileId = selectedUpdate.general.userId;
  const incidentId = selectedUpdate.updates.incidentId;
  const filterProfile = profiles.find(
    (profile) => !profile.information.profileId.indexOf(updateProfileId)
  );

  const selectedIncident = incidents.filter(
    (incident) => incident._id === incidentId
  );
  const formattedIncidents = selectedIncident.map((data) => {
    const { _id } = data;
    return { _id, ...data.incident, ...data.geographics };
  });
  return (
    <>
      <DetailsContainer>
        {!loading ? (
          <>
            <DetailsHeader header={`Update Incident`} />
            <UserBlock profileData={filterProfile} />
            <Divider />
            <DetailsBlock
              title={updateInformation.title}
              detailRows={updateInformation.rows}
            >
              <DetailsTable
                data={formattedIncidents}
                linkAccessors={"_id"}
                path={"/incidents"}
                allowedKeys={[
                  "municipal",
                  "priority",
                  "status",
                  "volume_traffic",
                  "_id",
                ]}
                tableHeader={[
                  "Municipal",
                  "Priority",
                  "Status",
                  "Volume",
                  "Id",
                ]}
              />
            </DetailsBlock>
            <DetailsBlock
              title={updateTime.title}
              detailRows={updateTime.rows}
            />
          </>
        ) : (
          <LoadingBar />
        )}
      </DetailsContainer>
    </>
  );
};

export default UpdateDetails;
