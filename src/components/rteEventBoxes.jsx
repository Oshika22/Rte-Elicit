// components/EventBoxes.jsx
import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import _gsap from 'gsap/gsap-core';
import BottomDrawer from './rteDrawer';


const rteEventBoxes = ({ events, selectedDate, setSelectedDate, setActiveBox, activeBox, isEventHighlighted}) => {
const [drawerOpen, setDrawerOpen] = useState(false);
const [currentEvent, setCurrentEvent] = useState(null);
// Event click and double click functions
  const [clickCount, setClickCount] = useState(0);
  const handleClick = (event,index) => {
    setClickCount(clickCount + 1);
    setActiveBox(index);
    setSelectedDate(event.date.format('YYYY-MM-DD'));
  };

  const handleDoubleClick = (event) => {
    setClickCount(0);
    setCurrentEvent(event);
    setDrawerOpen(true); 
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setCurrentEvent(null);
  };


  // Floating animations
  useGSAP(() => {
          gsap.to('.event-grp1', { 
          y: 15, 
          scale: 0.97,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.out"
        });
        gsap.to('.event-grp2', { 
          y: -15,
          scale: 0.97,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.out"
        });
    },
  );

  return (
    <div className="flex flex-wrap justify-center align-middle items-center event-container">
      {events.map((event, index) => (
        <div
          key={index}
          className={`event-wrapper flex justify-center align-middle items-center ${1 === index || 3 === index? 'event-grp1' : 'event-grp2'} ${isEventHighlighted(event.date) ? 'highlighted' : ''}`}
          onClick={() => handleClick(event,index)}
          onDoubleClick={() => handleDoubleClick(event)}
        >
          <div className="event-holder"></div>
          <div className={`${activeBox === index || isEventHighlighted(event.date) ? 'remove' : 'cover'}`}></div>
          
        </div>
      ))}
      <BottomDrawer isOpen={drawerOpen} onClose={closeDrawer} event={currentEvent} />
    </div>
  );
};

export default rteEventBoxes;