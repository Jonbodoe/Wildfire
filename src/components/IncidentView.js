import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography } from '@material-ui/core';
import DetailsContainer from './DetailsContainer';
import DetailsBlock from './DetailsBlock';
import DetailsTitle from './DetailsTitle';
import DetailsContent from './DetailsContent';
import DetailsHeader from './DetailsHeader';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         margin: theme.spacing(1,2),
//         padding: theme.spacing(2,3),
//         backgroundColor: theme.palette.secondary.lighter,
//         boxShadow: '0px 0px 10px #dbdbdb',
//     },
//     ItemContainer: {
//         backgroundColor: theme.palette.secondary.light,
//         padding: theme.spacing(2),
//         margin: theme.spacing(1,0)
//     }
// }));

const IncidentView = (props) => {
    // const classes = useStyles();
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Header Lorem Ipsum`}/>
            <DetailsBlock>
                <DetailsTitle title={`Incident Information`}/>
                <DetailsContent type='Incident' content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type='ID' content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type='Initial Date' content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type='Zipcodes Affected' content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Incident Cases`}/>
                <DetailsContent type={`Title`} content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Areas Affected`}/>
                <DetailsContent type="Area Affected" content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type="Occurences" content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type="Wildfire Type" content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Additional Notes`}/>
                <DetailsContent type={`Title`} content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Incident Progress`}/>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default IncidentView;