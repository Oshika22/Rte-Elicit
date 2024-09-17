import React, { useState } from 'react';
import Calender from './calender';
import EventBoxes from './rteEventBoxes';
import dayjs from 'dayjs';

const RteEventPage = () => {
// selecting dates
  const eventDates = [
    dayjs('2024-09-13'),
    dayjs('2024-09-15'),
    dayjs('2024-09-20'),
    dayjs('2024-09-25'),
  ];

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [activeBox, setActiveBox] = useState(null);

  const events = [
    { id: 0, date: dayjs('2024-09-13') },
    { id: 1, date: dayjs('2024-09-15') },
    { id: 2, date: dayjs('2024-09-20') },
    { id: 3, date: dayjs('2024-09-25') },
  ];

  const isEventHighlighted = (eventDate) => selectedDate.isSame(eventDate, 'day');

  return (
    <div className="flex flex-col align-middle items-center justify-center container">
      <div className="flex align-middle justify-center calender-container">
        <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} eventDates ={eventDates} />
      </div>

      <EventBoxes 
        events={events}
        selectedDate={selectedDate}
        setActiveBox={setActiveBox}
        activeBox={activeBox}
        isEventHighlighted={isEventHighlighted}
      />
    </div>
  );
};

export default RteEventPage;