import React, { useState, useEffect } from "react";

import "./styles.css";

export default function App() {
  var [state, setState] = useState({
    date: 0,
    apiKey: "obEwYScfaIlQaqtRCbWLFZY4vNACLSln6f3x4x6t",
    apiURL:
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=",
    data: {},
    imgURL: ""
  });

  useEffect(() => {
    fetch(state.apiURL + state.date + "&api_key=" + state.apiKey)
      .then((res) => res.json())
      .then((data) => {
        setState({ ...state, data });
      });
  }, [state.date]);
  const getImage = (e) => {
    setState({ ...state, imgURL: state.data.photos[0].img_src });
  };
  return (
    <div className="App">
      <h1 className="flex-item">NASA Mars Rover Images</h1>
      <input
        className="flex-item"
        type="date"
        name="date"
        value={state.date}
        onChange={(e) => {
          setState({ ...state, date: e.target.value });
        }}
      />
      <button onClick={getImage} className="flex-item">
        Get Image
      </button>
      <img src={state.imgURL} className="flex-item"></img>
    </div>
  );
}
