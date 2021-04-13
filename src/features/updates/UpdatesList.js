import React from 'react';
import DetailsHeader from '../../components/DetailsHeader';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { listUpdates } from '../../app/reducers/updates/updateSlice';
import { listProfiles } from '../../app/reducers/profiles/profilesSlice';
import UpdatesItem from './UpdatesItem';
// import MainContainer from '../components/MainContainer';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: theme.spacing(10),
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        backgroundColor: theme.palette.secondary.lighter
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1),
    },
}));

const UpdatesList = () => {
    const updatesList = useSelector(listUpdates);
    const profilesList = useSelector(listProfiles);
    const classes = useStyles();

    const updatesData = updatesList.map((update) => {
        const profileId = update.general.userId
        const getProfileData = profilesList.filter((profile) => profileId === profile.information.profileId)
        const [profileData] = getProfileData
        return { ...update, profileData }
    })

    return <div className={classes.container}>
        <DetailsHeader header={`Updates`} />
        {
            updatesData.map((update, i) => {
                return <React.Fragment key={i}>
                    {
                        update.profileData ? <UpdatesItem update={update} /> : <BorderLinearProgress variant="indeterminate" />
                    }
                </React.Fragment>
            })}
    </div>

}

export default UpdatesList;