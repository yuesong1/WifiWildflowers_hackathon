import React, {useState, useEffect} from 'react'
import gif from "./pic/pushjet.gif"
import { Grid, Typography } from '@mui/material'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import "./PushbackJet.css";
import { StyledText } from '../../Fonts';
//import ProgressBar from './ProgressBar/ProgressBar';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { getDatabase, ref as dbRef , onValue, set, update } from "firebase/database";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection:"column", alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} style={{height: '20px'}}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{props.value}%</Typography>
        
      </Box>
      
    </Box>
  );
}

const PushbackJet = () => {
  const tripemmissions = 2170700;
  const [progress, setProgress] = React.useState(0.00);
  const [totalValue, setTotalValue] = useState(0);
  const db = getDatabase();

  useEffect(() => {
    const totalRef = dbRef(db, 'totals/totalPoints');
    onValue(totalRef, (snapshot) => {
        const data = snapshot.val();
        setTotalValue(data);
    });
  }, []);
  useEffect(() => {
    const percentage = (totalValue / tripemmissions) * 100;
    setProgress(percentage);
  }, [totalValue]);
    
    /*const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 30,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));*/

  return (
    <>
        <Grid container sx={{display:"flex", flexDirection: "column", justifyContent:"center", padding:"20px"}}>
            <Typography variant='h4' style={{textAlign: "center"}}>
                <StyledText>
                    PUSH BACK THE JET!
                </StyledText>
            </Typography>
            <img src={gif} alt="Push back the jet!" className='responsive' style={{width: '20%', minWidth: "200px", height: 'auto', margin: '0 auto'}}/>
            {/*<ProgressBar bgcolor={blue} completed={50}/>*/}
            <div>
              <Typography variant='h2' style={{textAlign: "center"}}>
                  {totalValue} g
              </Typography>
              <h3 style={{textAlign: "center"}}>of CO2 emissions avoided</h3>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgressWithLabel value={progress} />
              <p style={{textAlign: "center"}}>Of A flight from Melbourne to Sydney</p>
              
            </Box>
            
        </Grid>
        
    </>
  )
}

export default PushbackJet
