import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PrimaryButton from '../../components/PrimaryButton';
import labels from '../../app/detailStatusLabels';
// import { useDispatch } from 'react-redux';
// import { listIncidents, updateList } from '../../app/reducers/incidents/incidentSlice';
// import updateIncident from '../../app/reducers/incidents/middleware/updateIncident';
import DetailsBlock from '../../components/DetailsBlock';
import { listIncidents } from '../../app/reducers/incidents/incidentSlice';
import { useSelector } from 'react-redux';
import updateCase from '../../app/reducers/incidents/middleware/updateCase';

const useStyles = makeStyles((theme) => ({
    saveButton: {
        fontWeight: 600,
        borderRadius: '0px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(2, 0),
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.darkish,
        },
    },
    textFieldContainer: {
        marginBottom: theme.spacing(1.5),
        '& .MuiInputLabel-root': {
            margin: theme.spacing(0, 1.5),
        },
        '& .MuiInputBase-inputMultiline': {
            margin: theme.spacing(0, 1.5),
        },
    },
    textField: {
        backgroundColor: theme.palette.secondary.lighter,
    },
    title: {
        fontWeight: '600',
        color: theme.palette.primary.light,
        paddingBottom: theme.spacing(1)
    },
    select: {
        backgroundColor: theme.palette.secondary.lighter,
        padding: theme.spacing(0.75),
        minWidth: '235px',
        maxWidth: '300px'
    },
    selectGroup: {
        padding: theme.spacing(2, 0)
    }
}))
// const validationSchema = yup.object({
//     hazard_warnings: yup
//         .string('List any additional notes')
//         .max(75, 'Too Long!'),
//     additional_notes: yup
//         .string('List any additional notes')
//         .max(75, 'Too Long!'),
//     valuable_assets: yup
//         .string('List any additional notes')
//         .max(75, 'Too Long!'),
//     reviewed: yup
//         .string('Select a status level')
//         .required('Selected status is required'),
// });

const CaseFormFields = (props) => {
    const { data, caseId, incidentId } = props;
    // const caseId = data.zip_code;
    const { reviewed, additional_notes, valuable_assets, hazard_warnings } = data;
    const incidentList = useSelector(listIncidents);
    // console.log(data)
    const {reviews} = labels;
    const [formContent, setFormContent] = useState({
        reviewed: reviewed,
        valuable_assets: valuable_assets,
        hazard_warnings: hazard_warnings,
        additional_notes: additional_notes
    })

    // const dispatch = useDispatch();
    const classes = useStyles();

    const initialValues = {
        additional_notes: formContent.additional_notes,
        reviewed: formContent.reviewed,
        hazard_warnings: formContent.hazard_warnings,
        valuable_assets: formContent.valuable_assets
    }

    useEffect(() => {
        setFormContent({
            reviewed: reviewed,
            additional_notes: additional_notes,
            hazard_warnings: hazard_warnings,
            valuable_assets: valuable_assets
        })
    }, [reviewed, additional_notes, hazard_warnings, valuable_assets])

    const submitFormData = (values) => {
        // const updateCaseList =
        console.log(updateCase(incidentList, values, incidentId, caseId));
        // alert(JSON.stringify(values, null, 2));
        // console.log(values, 'values baby')
        

        // additional_notes, reviewed, hazard_warning, valuable_assets
    }

    return <>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => submitFormData(values)}
            enableReinitialize
            // validationSchema={validationSchema}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <DetailsBlock title='Case Resource Assessment'>
                    <div className={classes.textFieldContainer}>
                        <TextField
                            className={classes.textField}
                            id="standard-multiline-flexible"
                            label={'Valuable Assets'}
                            multiline
                            fullWidth
                            name="valuable_assets"
                            rows={4}
                            value={props.values.valuable_assets}
                            onChange={props.handleChange}
                            error={props.touched.valuable_assets && Boolean(props.errors.valuable_assets)}
                            helperText={props.touched.valuable_assets && props.errors.valuable_assets}
                        />
                    </div>
                    <div className={classes.textFieldContainer}>
                        <TextField
                            className={classes.textField}
                            id="standard-multiline-flexible"
                            label={'Hazard Warnings'}
                            multiline
                            fullWidth
                            name="hazard_warnings"
                            rows={4}
                            value={props.values.hazard_warnings}
                            onChange={props.handleChange}
                            error={props.touched.hazard_warnings && Boolean(props.errors.hazard_warnings)}
                            helperText={props.touched.hazard_warnings && props.errors.hazard_warnings}
                        />
                    </div>
                    </DetailsBlock>
                    <DetailsBlock title='Case Progress'>
                    <div className={classes.textFieldContainer}>
                        <TextField
                            className={classes.textField}
                            id="standard-multiline-flexible"
                            label={'Additional Notes'}
                            multiline
                            fullWidth
                            name="additional_notes"
                            rows={4}
                            value={props.values.additional_notes}
                            onChange={props.handleChange}
                            error={props.touched.additional_notes && Boolean(props.errors.additional_notes)}
                            helperText={props.touched.additional_notes && props.errors.additional_notes}
                        />
                    </div>
                    <Grid container className={classes.selectGroup}>
                    <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Review Status</InputLabel>
                                <Select
                                    className={classes.select}
                                    native
                                    name="reviewed"
                                    label="reviewed"
                                    value={props.values.reviewed}
                                    onChange={props.handleChange}
                                    // error={props.touched.status && Boolean(props.errors.status)}
                                    inputProps={{
                                        name: 'reviewed',
                                        id: 'status-native-simple',
                                    }}
                                >
                                    <option aria-label={'Status'} value="" disabled>- select -</option>
                                    {
                                        reviews.map((status) => <option key={status.uid} value={status.label}>{status.label}</option>)
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                    </Grid>
                    <PrimaryButton text={'Save Changes'} type="submit">
                        <NavigateNextIcon />
                        </PrimaryButton>
                    </DetailsBlock>
                </form>
            )}
        </Formik>
    </>
}

export default CaseFormFields;