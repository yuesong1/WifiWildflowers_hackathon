import React from "react"
   export const ItemRecogAPI=( picUrl )=>{

    const axios = require("axios").default;
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/object_detection",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2RkYWEyZmYtYTVkYi00ODhjLTk0ZTYtMWFiNDdjMmZkZWUyIiwidHlwZSI6ImFwaV90b2tlbiJ9.ExDKejgjN2NCbKFGl6U3V-LhTzT6zvKUVMKWyZ3y1wE",
      },
      data: {
        show_original_response: false,
        fallback_providers: "",
        providers: "amazon, google",
        file_url: {picUrl},
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }