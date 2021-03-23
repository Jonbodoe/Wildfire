import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link as RouterLink, useLocation, useRouteMatch} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 450,
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
    let { path, url } = useRouteMatch();
    const linkUrl = props.linkAccessors;
    console.log(path, url, 'path url')
    // let location = useLocation();
    // console.log(location);
    // console.log(props, 'detailsTable')
    // console.log(props.data, 'data');
    const classes = useStyles();
    const header = props.tableHeader

    // Use location to get the base,
    // whatever param is passed down to the props. 

    const rows = props.data.map((data)=> _.pick(data, props.allowedKeys));

    const renderColumns = row => {
        const columnAccessors = Object.keys(row);
        // This uses the object keys to iterate through the columns per row.
        // console.log(row,columnAccessors, 'column render')
        return columnAccessors.map((column, i) => {
            // console.log(column, 'column', row)
            return <TableCell key={i} align="left" className={classes.cellRow}>
                {
                    linkUrl? <Link component={RouterLink} to={`${url}/case/${row[linkUrl]}`}>{row[column]}</Link> : <>{row[column]}</>
                }
            </TableCell>
            // Accessing the data row using the column's object property through columnAccessors.
        })
    };
    // const rowsKeys = rows.map((data)=> Object.keys(data));
    const tableRows = rows.map((row, i) => {
        return <TableRow key={i}>{renderColumns(row)}</TableRow>
    });

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
