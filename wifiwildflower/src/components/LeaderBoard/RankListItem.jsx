import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { StyledText } from '../../Fonts';

const RankListItem = (props) => {
  return (
    <Grid container direction="row" sx={{alignItems:"center",justifyContent:"space-between", flexDirection:"row"}}>
    <ListItemAvatar sx={{marginTop:0}}>
    <Avatar alt={props.username} src="/static/images/avatar/1.jpg" sx={{marginTop:0}}/>
    </ListItemAvatar>
    {/* <ListItemText
      primary={props.username}
    /> */}
    <StyledText>
      <Typography>
        {props.username}
      </Typography>
    </StyledText>
   
    </Grid>
  )
}

export default RankListItem
