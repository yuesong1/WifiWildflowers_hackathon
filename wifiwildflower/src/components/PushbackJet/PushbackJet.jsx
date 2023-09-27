import React from 'react'
import gif from "./pic/IMG_0070.GIF"
import { Grid, Typography } from '@mui/material'
import "./PushbackJet.css";
const PushbackJet = () => {
  return (
    <>
        <Grid container sx={{display:"flex", justifyContent:"center", padding:"50px"}}>
            <Typography variant='h4'>Push back the jet!</Typography>
            <img src={gif} alt="Push back the jet!" className='responsive'/> 
        </Grid>

    </>
  )
}

export default PushbackJet
