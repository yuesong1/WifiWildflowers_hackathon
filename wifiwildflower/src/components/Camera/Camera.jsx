import React, { useRef, useState, useContext } from 'react'
import axios from 'axios';
import FormData from 'form-data';
import {NavBar} from "../NavBar/NavBar";
import { CameraAlt, ThumbUpAlt, ThumbDownAlt } from "@mui/icons-material";
import { Button } from '@mui/material';
import { getDatabase, ref as dbRef , onValue, set, update } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { AuthContext, AuthContextType } from '../../App'; 
import { CircularProgress } from '@mui/material';

const Camera = () => {
  const [found, setFound] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [YourItem, setYourItem] = useState(null)

  const authContext = useContext(AuthContext);
  const currentUser = authContext ? authContext.currentUser : null;



  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  //
  const randomNumber = Math.floor(Math.random() * (60 - 50 + 1)) + 50;
  
  

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setStreaming(true);
    } catch (err) {
      console.error("Failed to start camera", err);
    }
  };

  const captureImage = () => {
    if (streaming) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, 640, 480);
      // You can now use the image data in the canvas for processing
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    sendFile(file);
    event.target.value = null;
  };
  const sendFile = (file) => {
    setIsLoading(true);
    const FormData = require("form-data");
  
    const form = new FormData();
    form.append("show_original_response", false);
    form.append("fallback_providers", "");
    form.append("providers", "amazon");
    //form.append("providers", "google,amazon");
    form.append("file", file);
  
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/object_detection",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_IMAGE_API_KEY}`,
        "Content-Type": "multipart/form-data",
      },
      data: form,
    };
  
    axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      ProcessResponse(response.data["eden-ai"].items, currentUser)
      setIsLoading(false); // End loading
    })
    .catch((error) => {
      console.error(error.response.data.error.message.file[0]);
      alert(error.response.data.error.message.file[0])
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
      }
      setIsLoading(false); // End loading
      setHasRun(false);
    });
  }

  const ProcessResponse = async (items, currentUser) => {
    const db = getDatabase();
    const userRef = dbRef(db, 'users/' + currentUser.uid);
    const confidenceThreshold = 0.95; // Set your desired confidence threshold here
    const targetItem = "Cup"; // Set your target item here
  
    let found = false;
  
    items.forEach(item => {
      if (item.label === targetItem && item.confidence > confidenceThreshold) {
        found = true;
      }
    });
    setFound(found);
    setHasRun(true);
  
    console.log(`Target item detected with high confidence: ${found}`);
    if (found) {
      // Fetch current points
      let currentPoints = 0;
      onValue(userRef, (snapshot) => {
        currentPoints = snapshot.val().points;
      });
  
      // Increment points
      currentPoints += randomNumber;
  
      // Update points in the database
      await update(userRef, {
        points: currentPoints,
      }).then(() => {
        console.log("updated score")
        // Call the function to refetch user
        // refetchUser(); // Uncomment this if you have a refetchUser function
      });
    } else {
      setYourItem(items[0].label)
  }
    
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "00px" }}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", borderRadius: "15px", width: "80%", boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)", marginTop: "2vh"}}>
        <p style={{fontSize: window.innerWidth <= 768 ? '10px' : '16px'}}>Did you know that producing just one coffee cup results in 110g of CO2 emissions? That's a significant environmental impact from just one item. This is why it's always best to use reusable cups whenever possible to significantly reduce our carbon footprint. However, if you're caught without your reusable mug, recycling is a close second best. In fact, recycling a traditional paper coffee cup reduces its carbon footprint by a remarkable 54%. Landfilling, on the other hand, should always be the last resort, as it is the least environmentally friendly option. Let's compete to see how much CO2 we can reduce together!. Our AI will verify whether you really have a coffee cup in hand! So, simply upload a picture of your coffee cup, pledge to recycle, and start earning points while making a tangible difference for our planet!</p>

      </div>
      <h1 style={{textAlign: "center"}}> Take a photo</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
      <label htmlFor="icon-button-file">
        <input accept="image/*" id="icon-button-file" type="file" capture="user" onChange={handleFileUpload} style={{display: "none"}}/>
        <Button component="span" sx={{ margin: 1, borderRadius: 5, boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, 0.3)' }}>
          <CameraAlt sx={{ fontSize: 100, color: 'black' }} />
        </Button>
      </label>
    </div>
    {isLoading ? (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "large"}}>
        <CircularProgress />
      </div>
    ) : (
      // Your existing code
    
    hasRun && (
      found ? (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
          <h2>Success! You've successfully saved {randomNumber}g of carbon by recycling compared to landfill</h2>
          <ThumbUpAlt style={{color: '#bada55', fontSize: '100px'}}></ThumbUpAlt>
        </div>
      ) : (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
          <h2>Failure! {YourItem} is not eligible! You didn't earn any points</h2>
          <ThumbDownAlt style={{color: '#ff0000', fontSize: '100px'}}></ThumbDownAlt>
        </div>
      )
    )
    )
  }
      
      <NavBar></NavBar>
    </div>
  )
}




export default Camera
