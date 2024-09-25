import React from 'react';

const EventPopup = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Event Details</h2>
          <button onClick={onClose} className="popup-close-btn">X</button>
        </div>
        <div className="popup-content">
          <p><strong>Event Date:</strong> {event.date.format('YYYY-MM-DD')}</p>
          <button className='registerBtn'>Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;