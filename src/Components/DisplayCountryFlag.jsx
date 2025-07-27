
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

    useEffect(()=>{
         axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`)
     .then((res)=>{
       console.log("res",res.data);
       setCountries(res.data);
       setFilter(res.data);
     })
     .catch((err)=>{
      console.log("fetching error",err);
      
     })

    },[])

    const handleSearch=(query)=>{
  const filterData=countries.filter(country=>(
    country.name.common.toLowerCase().includes(query.toLowerCase().trim())
  ))
  setFilter(filterData)


}
 return (
    <>
      <div className='App'>
        
        <Typography variant='h1'>
           country LIst
        </Typography>
        <SearchBar  onSearch={handleSearch}/>

        <Container sx={{width:"100%"}}>
           
           <Grid container spacing={3}>
              {filter.map((country, index) => (
               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CountryCard country={country} />
                 </Grid>
               ))}
          </Grid>
        </Container>
       

      </div>
      
    </>
  )

}
export default DisplayCountryFlag;