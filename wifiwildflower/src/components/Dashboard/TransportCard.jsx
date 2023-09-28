import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { birdPic,randomPic } from '../../Urls';

import { useTheme } from '@emotion/react'
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom' // Change this line


const TransportCard = props => {
    const theme = useTheme();
    const navigate = useNavigate();

    const navigateToCam = () => {
        navigate('/transport');
    }


  return (
    <Card sx={{ display: 'flex' }} onClick={navigateToCam} className='cardStyle'>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                Transport Challenge
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Daily pledge to ride green to uni
            </Typography>
            </CardContent>

        </Box>
        <CardMedia
            component="img"
            sx={{ width: "37vw"  }}
            image={process.env.PUBLIC_URL + '/bike.png'}
            alt="pic"
        />
        </Card>
  )
}

TransportCard.propTypes = {

}

export default TransportCard
