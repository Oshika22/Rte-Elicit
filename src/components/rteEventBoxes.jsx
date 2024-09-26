// components/EventBoxes.jsx
import React, { useState } from 'react';
import moment from 'moment';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import _gsap from 'gsap/gsap-core';
import EventPopup from './rtePopup';
//importing images
import eventImg1 from '../assets/rte_event_1.jpeg'

const rteEventBoxes = ({ events, selectedDate, setSelectedDate, setActiveBox, activeBox, isEventHighlighted}) => {
const [currentEvent, setCurrentEvent] = useState(null);
const [popupOpen, setPopupOpen] = useState(false);
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
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
    setCurrentEvent(null);
  };

// Event data
  const eventData = {
    name: 'Keyboard Warriors',
    poster: eventImg1,
    description: 'Exhilarating competition & monkey typing combined - this is the perfect getaway for testing your typing to the limit',
    date: moment('2024-09-26'),
    photos: [
      'path/to/photo1.jpg',
      'path/to/photo2.jpg',
      'path/to/photo3.jpg',
    ],
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
          <div className="event-holder">
            <img src={eventData.poster} alt={eventData.name} className="event-img" />
          </div>
          <div className={`${activeBox === index || isEventHighlighted(event.date) ? 'remove' : 'cover'}`}></div>
        </div>
      ))}
      <EventPopup isOpen={popupOpen} onClose={closePopup} event={eventData} />
    </div>
  );
};

export default rteEventBoxes;