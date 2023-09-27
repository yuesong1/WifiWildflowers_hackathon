import React, { useContext } from 'react';
import { AuthContext } from '../App'; // Replace with your actual import
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../App'; // Replace with your actual import




function Dashboard() {
  const authContext = useContext(AuthContext);
  const currentUser = authContext ? authContext.currentUser : null;
  const { refetchUser } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const auth = getAuth();
  const logout = () => {
    auth.signOut().then(() => {
      // Navigate back to home screen after successful logout
      navigate('/');
      refetchUser(); // Call the function to refetch user
    }).catch((error) => {
      // Handle any errors here
      console.error(error);
    });
  };
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={logout}>
        Logout
      </button>
      
    </div>
  );
}

export default Dashboard;
