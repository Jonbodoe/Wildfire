import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PrimaryButton from '../../components/PrimaryButton';
import labels from '../../app/detailStatusLabels';

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
        padding: theme.spacing(2,0)
    }
}))

const validationSchema = yup.object({
    textfield: yup
        .string('List any additional notes')
        .max(75, 'Too Long!'),
    selectStatus: yup
        .string('Select a status level')
        .required('Selected status is required'),
    selectPriority: yup
        .string('Select a priority level')
        .required('Selected priority is required'),
});

const CaseFormFields = (props) => {
    const { data } = props;
    const { status, priority } = data;
    console.log(data, status, priority)

    let [statusLabels, priorityLabels] = labels;
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            textfield: '',
            selectStatus: status,
            selectPriority: priority,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.textFieldContainer}>
            <TextField
                className={classes.textField}
                id="standard-multiline-flexible"
                label={'Additional Notes'}
                multiline
                fullWidth
                name="textfield"
                rows={4}
                value={formik.values.textfield}
                onChange={formik.handleChange}
                error={formik.touched.textfield && Boolean(formik.errors.textfield)}
                helperText={formik.touched.textfield && formik.errors.textfield}
            />
            </div>
            <Grid container className={classes.selectGroup}>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                        <Select
                            className={classes.select}
                            native
                            name="selectStatus"
                            label="selectStatus"
                            value={formik.values.selectStatus}
                            onChange={formik.handleChange}
                            error={formik.touched.selectStatus && Boolean(formik.errors.selectStatus)}
                            inputProps={{
                                name: 'selectStatus',
                                id: 'status-native-simple',
                            }}
                        >
                            <option aria-label={'Status'} value="" disabled>- select -</option>
                            {
                                statusLabels.statuses.map((status) => <option key={status.uid} value={status.label}>{status.label}</option>)
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
                            name="selectPriority"
                            label="selectPriority"
                            value={formik.values.selectPriority}
                            onChange={formik.handleChange}
                            error={formik.touched.selectPriority && Boolean(formik.errors.selectPriority)}
                            inputProps={{
                                name: 'selectPriority',
                                id: 'status-native-simple',
                            }}
                        >
                            <option aria-label={'Priority'} value="" disabled>- select -</option>
                            {
                                priorityLabels.priorities.map((priority) => <option key={priority.uid} value={priority.label}>{priority.label}</option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <PrimaryButton text={'Save Changes'} type="submit">
                <NavigateNextIcon />
            </PrimaryButton>
        </form>
    </>
}

export default CaseFormFields;