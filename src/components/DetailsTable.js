import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import pick from "lodash/pick";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
    maxWidth: 500,
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.lighter,
  },
  cellRow: {
    padding: theme.spacing(1, 2),
    textDecoration: "underline",
  },
  cellHead: {
    color: theme.palette.primary.light,
    padding: theme.spacing(1, 2),
  },
  box: {
    width: "100px",
    whiteSpace: "nowrap",
  },
  caption: {
    "& .MuiTable-root caption": {
      padding: theme.spacing(0),
    },
  },
  tableRow: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const DetailsTable = (props) => {
  const param = props.linkAccessors;
  const pathUrl = props.path;
  const classes = useStyles();
  const header = props.tableHeader;

  const rows = props.data.map((data) => pick(data, props.allowedKeys));

  const renderColumns = (row) => {
    const columnAccessors = Object.keys(row);
    // This uses the object keys to iterate through the columns per row.
    return columnAccessors.map((column, i) => {
      return (
        <TableCell key={i} align="left" className={classes.cellRow}>
          {param && pathUrl ? (
            <Link component={RouterLink} to={`${pathUrl}/${row[param]}`}>
              <Box
                className={classes.box}
                component="div"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {row[column]}
              </Box>
            </Link>
          ) : (
            <>{row[column]}</>
          )}
        </TableCell>
      );
      // Accessing the data row using the column's object property through columnAccessors.
    });
  };
  const tableRows = rows.map((row, i) => {
    return (
      <TableRow className={classes.tableRow} key={i}>
        {renderColumns(row)}
      </TableRow>
    );
    // Entries of the table row
  });

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="caption table">
        <caption className={classes.caption}>
          Information regarding Incidents
        </caption>
        <TableHead>
          <TableRow>
            {header.map((header) => (
              <TableCell key={header} className={classes.cellHead}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default DetailsTable;
