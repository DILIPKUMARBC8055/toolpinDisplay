import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ position, content, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className={`tooltip-box tooltip-${position}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
