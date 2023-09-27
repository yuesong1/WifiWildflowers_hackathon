import React, { useRef, useState, useContext, useEffect } from 'react'
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
//import { userList } from './LeaderBoardAPI';
import PushbackJet from '../PushbackJet/PushbackJet';
import { StyledText } from '../../Fonts';
import { getDatabase, ref as dbRef , onValue, set, update } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { AuthContext, AuthContextType } from '../../App'; 

const LeaderBoard = () => {
    const authContext = useContext(AuthContext);
    const currentUser = authContext ? authContext.currentUser : null;
    const db = getDatabase();
    const userRef = dbRef(db, 'users/' + currentUser.uid);

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const usersRef = dbRef(db, 'users');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            const users = Object.values(data);
            users.sort((a, b) => {
                const pointsA = Number(a.points) || 0; // If a.points is undefined, use 0
                const pointsB = Number(b.points) || 0; // If b.points is undefined, use 0
                return pointsB - pointsA; // sort in descending order
            });
            setUserList(users)
        });
    }, []);



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
                    <StyledText component="span">
                    Leader Board
                    </StyledText>
                <Grid container sx={{padding:"40px"}}>
                    {list.map((user, index)=>(
                        <React.Fragment key={index}>
                            <Grid item xs={12} 
                            sx={{
                                alignItems:"center",
                                justifyContent:"space-between",
                                margin:"5px",padding:"5px",
                                borderRadius:"10px", borderColor:"primary.main",
                                boxShadow: '0 3px 5px 2px #a2d2ff'}}  >
                                <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: "10px"}}>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <RankListItem {...user} ></RankListItem>
                                    </div>
                                    <div >
                                        <StyledText component="span" style={{fontSize: '20px', fontWeight: 'bold'}}>
                                            {user.points}
                                        </StyledText>
                                    </div>
                                </div>

                            </Grid>
                            
                        </React.Fragment>

                    ))}
                </Grid>

            </Container>

        
           
    </>
  )
}

export default LeaderBoard
