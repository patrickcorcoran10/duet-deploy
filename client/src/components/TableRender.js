
import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const TableRender = ({ dbLabel, bandList }) => {
    console.log("TRender", dbLabel)
    console.log("bandRender", bandList)

    const classes = useStyles();
    return (
          
        <div>
            {bandList.map((listing) => {

                if (dbLabel === "musicians") {
                    return (
                            <div>
                            <TableCell align="left">{listing.musician_name}</TableCell>

                       
                            <TableCell align="left">{listing.musician_genre}</TableCell>

                       
                            <TableCell align="left">{listing.instrument_playing}</TableCell>
                       </div>
                        )}
                else {
                    return (
                        <div>
                            <TableCell align="left">{listing.band_name}</TableCell>
                       
                            <TableCell align="left">{listing.band_genre}</TableCell>
                       
                            <TableCell align="left">{listing.instrument_seeking}</TableCell>
                       
                          </div> 
                    )}

            })
            }
        </div>

    )
    }
export default TableRender