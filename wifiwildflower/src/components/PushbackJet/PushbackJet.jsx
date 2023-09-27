import React from 'react'
import gif from "./pic/IMG_0070.GIF"
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import "./PushbackJet.css";
import { StyledText } from '../../Fonts';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ProgressBar from './ProgressBar/ProgressBar';
import { blue } from '@mui/material/colors';



const PushbackJet = () => {
    
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 30,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

  return (
    <>
        <Grid container sx={{display:"flex", justifyContent:"center", padding:"50px"}}>
            <Typography variant='h4'>
                <StyledText>
                    PUSH BACK THE JET!
                </StyledText>
            </Typography>
            <LinearProgress variant="determinate" value={50} />
            <img src={gif} alt="Push back the jet!" className='responsive'/> 
            <BorderLinearProgress variant="determinate" value={50} />
            <ProgressBar bgcolor={blue} completed={50}/>
            
        </Grid>
        
    </>
  )
}

export default PushbackJet
