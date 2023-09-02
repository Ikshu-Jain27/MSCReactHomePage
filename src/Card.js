import React, { useState } from "react";
// import Box from '@material-ui/core/Box';
// import { Box } from '@mui/material';

function Card({ title, description, iconSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <section className="upcard">
      <div
        className={`bg-white shadow-md rounded-lg p-6 flex h-full max-w-sm ${
          isHovered ? "hovered-card" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <Box display="flex"> */}
          <div className="icon-container">
            <img src={iconSrc} alt="Icon" className="icon" />
          </div>
          <div className="card-content">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-white-700">{description}</p>
          </div>
        {/* </Box> */}
      </div>
    // </section>
  );
}

export default Card;
