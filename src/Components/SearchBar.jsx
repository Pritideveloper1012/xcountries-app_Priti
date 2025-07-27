import React from "react"
import { Box, TextField } from "@mui/material"
const SearchBar =({onSearch})=>{
    return(
        <Box>
        <TextField
        label="serach country"
        variant="outlined"
       
        onChange={(e)=>onSearch(e.target.value)}
        />
        </Box>
        
    )
}
export default SearchBar