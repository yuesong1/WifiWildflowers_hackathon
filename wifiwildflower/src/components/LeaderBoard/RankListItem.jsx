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
    <ListItem alignItems="flex-start" sx={{alignItems:"center",justifyContent:"space-between"}}>
    <ListItemAvatar>
    <Avatar alt={props.username} src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={props.username}
    />
   
    </ListItem>
  )
}

export default RankListItem
