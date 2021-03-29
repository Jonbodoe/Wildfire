import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputLabel-root': {
          margin: theme.spacing(0,1.5),
        },
        '& .MuiInputBase-inputMultiline': {
            margin: theme.spacing(0,1.5),
          },
    },
    textField: {
        backgroundColor: theme.palette.secondary.lighter,
    }
}));

const DetailsTextField = (props) => {
    const { rows, info, label } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(info);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return <>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-multiline-flexible"
                label={label}
                multiline
                fullWidth
                rows={rows}
                value={value}
                onChange={handleChange}
                className={classes.textField}
            />
        </form>
    </>
}

export default DetailsTextField;