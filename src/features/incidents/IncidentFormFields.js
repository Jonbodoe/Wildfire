import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
// import * as yup from 'yup';
import { FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PrimaryButton from '../../components/PrimaryButton';
import labels from '../../app/detailStatusLabels';
import { useDispatch, useSelector } from 'react-redux';
import { listIncidents, updateList } from '../../app/reducers/incidents/incidentSlice';
import updateIncident from '../../app/reducers/incidents/middleware/updateIncident';

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

const IncidentFormFields = (props) => {
    const { data, id } = props;
    const { status, priority, additional_notes } = data;
    const {statuses, priorities} = labels;
    const [formContent, setFormContent] = useState({
        status: status,
        priority: priority,
        additional_notes: additional_notes
    })

    const incidentList = useSelector(listIncidents);
    const dispatch = useDispatch();
    const classes = useStyles();

    const initialValues = {
        additional_notes: formContent.additional_notes,
        status: formContent.status,
        priority: formContent.priority,
    }
    // const validationSchema = yup.object({
    //     additional_notes: yup
    //         .string('List any additional notes')
    //         .max(75, 'Too Long!'),
    //     status: yup
    //         .string('Select a status level')
    //         .required('Selected status is required'),
    //     priority: yup
    //         .string('Select a priority level')
    //         .required('Selected priority is required'),
    // });

    useEffect(() => {
        setFormContent({
            status: status,
            priority: priority,
            additional_notes: additional_notes
        })     
    }, [status, priority, additional_notes])

    const submitFormData = (values) => {
        const updatedIncidentList = updateIncident(incidentList, values, id);
        dispatch(updateList(updatedIncidentList))
    }

    return <>
        <Formik
            initialValues = {initialValues}
            onSubmit ={(values) => submitFormData(values)}
            enableReinitialize
            // validationSchema = {validationSchema}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
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
                                <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                                <Select
                                    className={classes.select}
                                    native
                                    name="status"
                                    label="status"
                                    value={props.values.status}
                                    onChange={props.handleChange}
                                    error={props.touched.status && Boolean(props.errors.status)}
                                    inputProps={{
                                        name: 'status',
                                        id: 'status-native-simple',
                                    }}
                                >
                                    <option aria-label={'Status'} value="" disabled>- select -</option>
                                    {
                                        statuses.map((status) => <option key={status.uid} value={status.label}>{status.label}</option>)
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Priority</InputLabel>
                                <Select
                                    className={classes.select}
                                    native
                                    name="priority"
                                    label="priority"
                                    value={props.values.priority}
                                    onChange={props.handleChange}
                                    error={props.touched.priority && Boolean(props.errors.priority)}
                                    inputProps={{
                                        name: 'priority',
                                        id: 'status-native-simple',
                                    }}
                                >
                                    <option aria-label={'Priority'} value="" disabled>- select -</option>
                                    {
                                        priorities.map((priority) => <option key={priority.uid} value={priority.label}>{priority.label}</option>)
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <PrimaryButton text={'Save Changes'} type="submit">
                        <NavigateNextIcon />
                    </PrimaryButton>
                </form>
            )}
        </Formik>
    </>
}

export default IncidentFormFields;