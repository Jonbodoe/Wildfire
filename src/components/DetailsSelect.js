import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: '600',
        color: theme.palette.primary.light,
        paddingBottom: theme.spacing(1)
    },
    select: {
        backgroundColor: theme.palette.secondary.lighter,
        padding: theme.spacing(0.75),
        minWidth: '225px',
        maxWidth: '300px'
    }
}));

const DetailsSelect = (props) => {
    const { label, dataLabels, selectedStatus } = props;
    const classes = useStyles();

    const [selection, setSelection] = React.useState(selectedStatus);

    useEffect(() => {
        setSelection(selectedStatus);
    }, [selectedStatus]);

    const handleChange = (event) => {
        setSelection(event.target.value);
    };
    return <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
        className={classes.select}
          native
          value={selection}
          onChange={handleChange}
          inputProps={{
            name: label,
            id: 'status-native-simple',
          }}
        >
          <option aria-label={label} value="" disabled>- select -</option>
          {
              dataLabels.map((status) => <option key={status.uid} value={status.label}>{status.label}</option>)
          }
        </Select>
      </FormControl>
    </div>
}

export default DetailsSelect;