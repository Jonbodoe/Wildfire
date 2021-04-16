import React from 'react';
import DetailsHeader from '../../components/DetailsHeader';
import { makeStyles } from '@material-ui/core/styles';
import UpdatesItem from './UpdatesItem';
import mergeUpdatesData from '../../app/reducers/updates/middleware/mergeUpdatesData';
import LoadingBar from '../../components/LoadingBar';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1),
    },
}));

const UpdatesList = (props) => {
    const { updates, profiles } = props
    const classes = useStyles();

    const updatesData = mergeUpdatesData(updates, profiles)

    return <div className={classes.container}>
        <DetailsHeader header={`Updates`} />
        {
            updatesData.map((update, i) => {
                return <React.Fragment key={i}>
                    {
                        update.profileData ? <UpdatesItem update={update} /> : <LoadingBar/>
                    }
                </React.Fragment>
            })}
    </div>

}

export default UpdatesList;