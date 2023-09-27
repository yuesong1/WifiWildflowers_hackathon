import './App.css';
import React, {ReactNode} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginScreen from './components/Login/LoginScreen';
import { useState, useEffect, createContext, useContext } from 'react';
import Dashboard from "./screens/dashboard"

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
  return (
    <Router>
    <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;