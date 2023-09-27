import './App.css';
import React, {ReactNode} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginScreen from './components/Login/LoginScreen';
import { useState, useEffect, createContext, useContext } from 'react';
import DashboardScreen from "./components/Dashboard/DashboardScreen.jsx"
import LeaderBoard from './components/LeaderBoard/LeaderBoard.jsx';
import Camera from './components/Camera/Camera';
import PushbackJet from './components/PushbackJet/PushbackJet';
import Transport from './components/Camera/Transport';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: "https://wifiwildflowers-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);


//authcontext
// Interface for AuthContext
export interface AuthContextType {
  currentUser: User | null;
  refetchUser: () => void;
  
}

//authcontext
export const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
  const auth = getAuth();

  const refetchUser = () => {
    
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Store user data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

      } else {
        // Clear the stored data if user is null
        localStorage.removeItem('currentUser');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  // Get the user data from localStorage
  //const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');


  return (
    <AuthContext.Provider value={{ currentUser, refetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}






function App() {
  const authContext = useContext(AuthContext);
  const currentUser = authContext?.currentUser;

  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/cam" element={<Camera />} />
          <Route path="/jet" element={<PushbackJet />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="*" element={currentUser ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
    
        </Routes>
    </Router>
  );
}

export default App;
