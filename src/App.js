import { useState } from "react";
import "./App.css";
import Tooltip from "./Tooltip";

function App() {
  const [position, setPosition] = useState("top");
  return (
    <div>
      <div className="buttonFlex">
        <button onClick={() => setPosition("top")}> TOP</button>
        <button onClick={() => setPosition("bottom")}>BOTTOM</button>
        <button onClick={() => setPosition("right")}>RIGHT</button>
        <button onClick={() => setPosition("left")}>LEFT</button>
      </div>
      <div style={{ padding: "50px" }} className="testTooltip">
        <Tooltip
          position={position}
          content={`Thanks for hovering! I'm a tooltip on ${position}`}
        >
          <button>Hover me ({position})</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
