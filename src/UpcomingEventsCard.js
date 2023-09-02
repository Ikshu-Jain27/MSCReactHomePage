// import React from "react";
import React, { useState } from "react";
import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';  
import upcomingEvents from "./upcomingEvents";

function UpcomingEventsCard (props) {
  const { id, title, guest, content, img, mode, date } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
   // <section className="upcard">
      // props.upcomingEventsCards.forEach((UpcomingEventsCard, i) => { 
      //    if(i % 4 == 0){
      //       <div className="row" key={UpcomingEventsCard.id}>       
      //          <article key={UpcomingEventsCard.id} className="col-md-3"></article>
      //       </div>
      //    }
      // });
      <div
         className={`bg-white shadow-md rounded-lg p-6 flex h-full max-w-sm ${
         isHovered ? "hovered-card" : ""
         }`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {/* <div className="icon-container">
         </div> */}
         <div className="card-content">
            <h2 className="text-xl font-semibold mb-3 ">{title}</h2>
            <h3 className="text-xl font-semibold mb-3 ">{date}</h3>
            <img src={img} alt="Image" className="upcardimg"/>
            <p className="text-white-700">{content}</p>
            <p className="space"></p>
            <Stack spacing={2} direction="row">
               <Button variant="contained">{guest}</Button>
               <Button variant="outlined">{mode}</Button>
            </Stack>
         </div>
      </div>
   // </section>
  );
};
{/* const UpcomingEventsCard = (props) => {
   const { title, guest, content, img, mode, date } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 flex h-full max-w-sm ${
        isHovered ? "hovered-card" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
   <div>
      <div className="icon-container">
        <img src={img} alt="Image" className="icon" />
      </div>
      <div className="card-content">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white-700">{guest}</p>
        <p className="text-white-700">{content}</p>
        <p className="text-white-700">{date}</p>
        <p className="text-white-700">{mode}</p>
      </div>
    </div>
  );
}; */}

export default UpcomingEventsCard

// key={upcomingEvent.id}
//               title={upcomingEvent.title}
//               img={upcomingEvent.img}
//               date={upcomingEvent.date}
//               content={upcomingEvent.content}
//               guest={upcomingEvent.guest}
//               mode={upcomingEvent.mode}