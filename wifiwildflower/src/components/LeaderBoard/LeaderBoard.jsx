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
import PushbackJet from '../PushbackJet/PushbackJet';
const LeaderBoard = () => {
    const list=userList;
    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
      };
  return (
    <>
        <NavBar/>
            <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"40px"}}>
                <PushbackJet/>
                <Typography variant="h5">Leader Board</Typography>
                <Grid container xs={12} sx={{padding:"40px"}}>
                    {list.map((user)=>(
                        <>
                            <Grid container xs={12} 
                            sx={{
                                alignItems:"center",
                                justifyContent:"space-between",
                                margin:"10px",padding:"10px",
                                borderRadius:"10px", borderColor:"primary.main"}}  >

                                <Grid>
                                    <RankListItem {...user} ></RankListItem>
                                </Grid>
                                <Grid>
                                    <Typography variant='h5'>{user.score}</Typography>
                                </Grid>

                            </Grid>
                            
                        </>

                    ))}
                </Grid>

            </Container>
    </>
  )
}

export default LeaderBoard
