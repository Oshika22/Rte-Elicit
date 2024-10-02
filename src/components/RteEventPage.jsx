import React, { useState, useEffect } from 'react';
import Calender from './calendar';
import EventBoxes from './rteEventBoxes';
import dayjs from 'dayjs';

const RteEventPage = () => {
// selecting dates
  const [selectedDate, setSelectedDate] = useState('2024-09-26');
  const [activeBox, setActiveBox] = useState(null);
  const events = [
    { id: 0, date: dayjs('2024-09-26') },
    { id: 1, date: dayjs('2024-10-01') },
    { id: 2, date: dayjs('2024-10-02') },
    { id: 3, date: dayjs('2024-10-05') },
  ];
// Selecting Dates and event hightlight
  useEffect(() => {
    const calendarDays = document.querySelectorAll('.calendar-day.clickable');
    calendarDays.forEach((day) => {
      day.addEventListener('click', (e) => {
        const clickedDate = dayjs(e.target.dataset.date); 
        setSelectedDate(clickedDate); 
      });
    });
  }, []);
  const isEventHighlighted = (eventDate) => dayjs(selectedDate).isSame(eventDate, 'day');

  return (
    <div className="flex flex-col align-middle items-center justify-center container">

      <div className="calender-container">
        <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>

      <EventBoxes 
        events={events}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setActiveBox={setActiveBox}
        activeBox={activeBox}
        isEventHighlighted={isEventHighlighted}
      />
    </div>
  );
};

export default RteEventPage;