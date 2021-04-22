import { Grid } from "@material-ui/core";
import React from "react";
import MainContainer from "../components/MainContainer";
import primaryLinks from "../components/PrimaryLinks";
import { useSelector } from "react-redux";
import DashboardIncidents from "../features/dashboard/DashboardIncidents";
import DashboardMaps from "../features/dashboard/DashboardMaps";
import DashboardUpdates from "../features/dashboard/DashboardUpdates";
import DashboardWeather from "../features/dashboard/DashboardWeather";
import { listUpdates } from "../app/reducers/updates/updateSlice";
import { listProfiles } from "../app/reducers/profiles/profilesSlice";
import { listIncidents } from "../app/reducers/incidents/incidentSlice";

const Dashboard = () => {
  const links = primaryLinks();

  const [incidents, updates, maps] = links;
  const updatesData = useSelector(listUpdates);
  const profilesData = useSelector(listProfiles);
  const incidentsData = useSelector(listIncidents);

  return (
      <MainContainer>
            <Grid item md={7}>
              <DashboardUpdates
                path={updates}
                updatesData={updatesData}
                profilesData={profilesData}
              />
              <DashboardMaps path={maps} />
            </Grid>
            <Grid item md={5}>
              <DashboardIncidents
                path={incidents}
                incidentsData={incidentsData}
              />
              <DashboardWeather />
            </Grid>
      </MainContainer>
  );
};

export default Dashboard;
