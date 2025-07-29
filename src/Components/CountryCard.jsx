import React from "react";
import {Card,CardMedia,CardContent,Typography} from '@mui/material'

const CountryCard=({country})=>{
    if (!country || !country.flags || !country.name) return null;

    return(
         <Card  sx={{maxWidth:"300px", margin:"auto"}}>
            <CardMedia
              component="img"
              height="140"
             image={country?.flags?.svg || "fallback.png"}// fallback if svg is undefined
              alt={country?.name?.common || "Country Flag"}
            />

            <CardContent>
                {/* <Typography>
                    display Country LIst
                </Typography> */}
                <Typography variant="h6">
                    {country?.name?.common || "Country Name"}
                </Typography>

            </CardContent>
         </Card>
   );

}
export default CountryCard