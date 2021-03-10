import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 500,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.secondary.lighter
    },
    cellRow: {
        padding: theme.spacing(1,2)
    },
    cellHead: {
        color: theme.palette.primary.light,
        padding: theme.spacing(1,2)
    }
}));

const DetailsTable = (props) => {
    const classes = useStyles();
    const header = props.tableHeader

    const rows = props.data.map((data)=> _.pick(data, props.allowedKeys));

    const renderColumns = row => {
        const columnAccessors = Object.keys(row);
        // This uses the object keys to iterate through the columns per row.
        return columnAccessors.map(column => <TableCell align="center" className={classes.cellRow}>{row[column]}</TableCell>)
    };
    // const rowsKeys = rows.map((data)=> Object.keys(data));
    const tableRows = rows.map((row, i) => <TableRow key={i}>{renderColumns(row)}</TableRow>);

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="caption table">
                <caption>Will get back to the table rows</caption>
                <TableHead>
                    <TableRow>
                        {
                            header.map((header)=> (
                                <TableCell key={header} className={classes.cellHead}>{header}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default DetailsTable;
