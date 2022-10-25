import React, { useState } from "react";
import "./styles.css";
import Callback from "./component/callback";
//parent
export default function App() {
  const [UIcolor, setUIColor] = useState(null);

  //Call Back Function
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className="App">
      <div
        className="app_color_container"
        style={{ background: `${UIcolor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}
