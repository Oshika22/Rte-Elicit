import { useState } from 'react'
import Calender from './components/calender'
import RteEventPage from './components/RteEventPage';

function App() {
// // selecting dates
//   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const eventDates = [
//     dayjs('2024-09-13'),
//     dayjs('2024-09-15'),
//     dayjs('2024-09-20'),
//     dayjs('2024-09-25'),
//   ];
// // Date picking event highlighted
//   const events = [
//     { id: 0, date: dayjs('2024-09-13') },
//     { id: 1, date: dayjs('2024-09-15') },
//     { id: 2, date: dayjs('2024-09-20') },
//     { id: 3, date: dayjs('2024-09-25') },
//   ];
//   const isEventHighlighted = (eventDate) => {
//     return selectedDate.isSame(eventDate, 'day');
//   };

// // Event click and double click functions
//   const [activeBox, setActiveBox] = useState(null);
//   const [clickCount, setClickCount] = useState(0);
//   const [message, setMessage] = useState('');
//   const handleClick = (index) => {
//     setClickCount(clickCount + 1);
//     setActiveBox(index);

//   };
//   const handleDoubleClick = (index) => {
//     setClickCount(0);
//     window.location.href = `/event/${index}`;
//   };

  
// // Floating animations
//   useGSAP(() => {
//         gsap.to('.event-grp1', { 
//           y: 15, 
//           scale: 0.97,
//           repeat: -1,
//           yoyo: true,
//           duration: 2,
//           ease: "sine.out"
//         });
//         gsap.to('.event-grp2', { 
//           y: -15,
//           scale: 0.97,
//           repeat: -1,
//           yoyo: true,
//           duration: 2,
//           ease: "sine.out"
//         });
//     },
//   );

  return (
    <div><RteEventPage/> 
    </div>
    // <div className="flex flex-col align-middle items-center justify-center container">

    //   <div className="flex align-middle justify-center calender-container">
    //     <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    //   </div>

    //   <div className="flex flex-wrap justify-center align-middle items-center event-container">
    //     {events.map((event, index) => (
    //       <div
    //       key = {index}
    //       className={`event-wrapper flex justify-center align-middle items-center ${1 === index || 3 === index? 'event-grp1' : 'event-grp2'} ${isEventHighlighted(event.date) ? 'highlighted' : ''}`}
    //       onClick={() => handleClick(index)}
    //       onDoubleClick={() => handleDoubleClick(index)}
    //       >
    //         <div className={`event-holder`}></div>
    //         <div className={`${activeBox === index || isEventHighlighted(event.date)?  'remove' : 'cover'}`}></div>
            
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default App
