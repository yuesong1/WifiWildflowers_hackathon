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

const EventCard = props => {
    const theme = useTheme();
  return (
    <Card sx={{ display: 'flex' }} className='cardStyle'>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={randomPic}
            alt="pic"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                St.Kilda Beach
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Event sponsered by Xxxx.
            </Typography>
            </CardContent>

        </Box>

        </Card>
  )
}

EventCard.propTypes = {

}

export default EventCard