import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import _gsap from 'gsap/gsap-core';

const BottomDrawer = ({ isOpen, onClose, event }) => {
  // // GSAP to close
  // useGSAP(() => {
  //   gsap.to('.close', { 
  //     height: 0, 
  //   });
  // },);
  let formattedDate = 'No Date Available';
  if (event && event.date) {
    if (typeof event.date === 'object' && typeof event.date.format === 'function') {
      formattedDate = event.date.format('YYYY-MM-DD');
    } else if (typeof event.date === 'string') {
      formattedDate = event.date;
    }
  }

  return (
    <div className={`drawer ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={onClose}>Close</button>
      <div>Event Date: {formattedDate}</div>
    </div>
  );
};

export default BottomDrawer;