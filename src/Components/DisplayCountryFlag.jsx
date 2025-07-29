
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
      const res = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(res.data);
      setFilter(res.data)
    } catch (error) {
      console.error("Error fetching countries:", error);  
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
       

        <Typography variant='h1'>
           Country List
        </Typography>
        <SearchBar  onSearch={handleSearch}/>

        <Container sx={{width:"100%"}}>
          {countries.length === 0 ? (
         <Typography variant="body1">Loading...</Typography>
         ) : (
        filter.length === 0 ? (
      <Typography>No countries found</Typography>
      ) : (
      <Grid container spacing={3}>
       {filter.map((country, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <CountryCard country={country} />
        </Grid>
       ))}
     </Grid>
    )
    )}
    </Container>
       

      </div>
      
    </>
  )

}
export default DisplayCountryFlag;