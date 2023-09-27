import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const RankListItem = (props) => {
  return (
    <ListItem alignItems="flex-start" sx={{justifyContent:"center"}}>
    <ListItemAvatar>
    <Avatar alt={props.username} src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={props.username}
    />
    <Typography variant='h5'>{props.score}</Typography>
    </ListItem>
  )
}

export default RankListItem
