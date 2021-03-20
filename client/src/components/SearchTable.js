import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableRender from "./TableRender";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SearchTable = (props) => {
  console.log("searchlist", props.bandList);
  console.log("dblable", props.dbLabel);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Genre</TableCell>
            <TableCell align="left">Instrument</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.bandList.map((listing) => {
            if (props.dbLabel === "musicians") {
              return (
                <TableRow>
                  <TableCell align="left">{listing.musician_name}</TableCell>
                  <TableCell align="left">{listing.musician_genre}</TableCell>
                  <TableCell align="left">
                    {listing.instrument_playing}
                  </TableCell>
                </TableRow>
              );
            } else {
              return (
                <TableRow>
                  <TableCell align="left">{listing.band_name}</TableCell>
                  <TableCell align="left">{listing.band_genre}</TableCell>
                  <TableCell align="left">
                    {listing.instrument_seeking}
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default SearchTable;
