import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import RankListItem from './RankListItem';
import { NavBar } from '../NavBar/NavBar';
import { Container, Grid } from '@mui/material';
import { userList } from './LeaderBoardAPI';
const LeaderBoard = () => {
    const list=userList;
  return (
    <>
        <NavBar/>
            <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"40px"}}>
                <Typography variant="h3">Leader Board</Typography>
                <Grid container xs={12} sx={{padding:"40px"}}>
                    {list.map((user)=>(
                        <Grid xs={12}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: "flex", justifyContent:"center"}}>
                                <RankListItem {...user} ></RankListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </Grid>
                    ))}
                </Grid>

            </Container>
    </>
  )
}

export default LeaderBoard
