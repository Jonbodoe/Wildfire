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
    // const rowsKeys = rows.map((data)=> Object.keys(data));
    rows.map(row => console.log(row));

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

                    {/* {rows.map((row, i) => (   
                        <TableRow key={i}>
                            <TableCell component="th" scope="row" className={classes.cellRow}>
                               
                            </TableCell>
                            <TableCell align="right" className={classes.cellRow}>{row.calories}</TableCell>
                            <TableCell align="right" className={classes.cellRow}>{row.fat}</TableCell>
                            <TableCell align="right" className={classes.cellRow}>{row.carbs}</TableCell>
                            <TableCell align="right" className={classes.cellRow}>{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default DetailsTable;