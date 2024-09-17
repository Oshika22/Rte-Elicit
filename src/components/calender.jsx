import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { selectClasses } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const eventDates = [3, 7, 15, 20, 25];

function EventDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;
  
  // Check if the day is an event date
  const isEventDay = eventDates.includes(day.date());

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isEventDay ? 'badges' : undefined} // Add badge for event dates
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}


const calender = ({ selectedDate, setSelectedDate,eventDates}) => {
  // const rendersDay = (day, _value, DayComponentProps) => {
  //   const isEventDay = eventDates.some((eventDate) => dayjs(eventDate).isSame(day, 'day'));
  //   console.log("Is event day:", isEventDay);
  //   return (
  //     <PickersDay
  //       {...DayComponentProps}
        
  //       sx={{
  //         // backgroundColor: isEventDay ? '#ffffff' : '', // Highlight event dates with a custom background
  //         // color: isEventDay ? '#2F0101' : '', // Change text color if highlighted
  //         backgroundColor: day.isSame(dayjs(), 'day') ? '#C09A37' : '',
  //       }}
  //     />
  //   );
  // };
  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
      orientation="portrait"
      value={selectedDate}
      onChange={(newValue) => setSelectedDate(newValue)}
      renderDay={(day, _value, DayComponentProps) => (
        <EventDay {...DayComponentProps} day={day} /> // Use custom event day renderer
      )}
      />
      
    </LocalizationProvider>
  )
}

export default calender