import React from 'react';
import { getAuth } from "firebase/auth";

const auth = getAuth();


function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={() => {
        const auth = getAuth();
        auth.signOut().then(() => {
          console.log('User signed out');
        });
      }}>
        Logout
      </button>
      
    </div>
  );
}

export default Dashboard;
