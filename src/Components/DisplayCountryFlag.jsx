
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import {Typography,Container,Grid} from '@mui/material'
import SearchBar from './SearchBar';         
import CountryCard from './CountryCard';     


const DisplayCountryFlag=()=>{
    const [countries,setCountries]=useState([]);
    const [filter,setFilter]=useState([])
    const [loading, setLoading] = useState(true);

  

useEffect(() => {
  const fetchCountries = async () => {
    try {
      const res = await axios.get('https://xcountries-backend.azurewebsites.net/all');
      setCountries(res.data);
      setFilter(res.data)
      setLoading(false)
    } catch (error) {
      console.error(`Error fetching data: ${error}`);

    }finally {
      setLoading(false);  
    }
  };

  fetchCountries();
}, []);


    const handleSearch=(query)=>{
  const filterData=countries.filter(country=>(
    country.name.common.toLowerCase().includes(query.toLowerCase().trim())
  ))
  setFilter(filterData)

};
if (loading) {
  return (
    <Typography>Loading...</Typography>
  );
}
 return (
    <>
 
      <div className='App'>
       
        <Typography variant='h4' align="center" gutterBottom>
        Country List
      </Typography>

      <SearchBar onSearch={handleSearch} />

      <Container sx={{ width: "100%", mt: 4 }}>
        {filter.length === 0 ? (
          <Typography variant="body1" align="center">No countries found</Typography>
        ) : (
          <Grid container spacing={3}>
            {filter.map((country, index) => (
              <Grid sx={{ gridColumn: 'span 4' }}key={index}>
                <CountryCard country={country} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
       

      </div>
      
    </>
  )

}
export default DisplayCountryFlag;