import React from "react";
import {Card,CardMedia,CardContent,Typography} from '@mui/material'

const CountryCard=({country})=>{
    return(
         <Card  sx={{maxWidth:"300px", margin:"auto"}}>
            <CardMedia
              component="img"
              height="140"
              image={country.flags.svg}
             alt={`Flag of ${country.name.common}`}
            />

            <CardContent>
                {/* <Typography>
                    display Country LIst
                </Typography> */}
                <Typography variant="h6">
                    {country.name.common}
                </Typography>

            </CardContent>
         </Card>
   );

}
export default CountryCard