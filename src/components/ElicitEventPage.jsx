import React from 'react';
import {Events,Drone,ElicitExpo,Robo,Stock} from '../assets/images'

const events = [
  {
    id: 1,
    title: 'Speaker Talk',
    image: Events,
    description: 'Unravel the mysteries of coding and algorithms in this exciting event.'
  },
  {
    id: 2,
    title: 'Stock Market Showdown',
    image: Stock,
    description: "The ultimate Bull vs. Bear brawl is back! The Stock Market Showdown at Elicit '24 is bigger, bolder, and more intense than ever!"
  },
  {
    id: 3,
    title: 'HACKS 9.0',
    image: Events,
    description: "A 48-HOUR HACKATHON, PREVIOUS EDITIONS OF WHICH HAVE SEEN OVER 900 PARTICIPANTS PAN-INDIA."
  },
  {
    id: 4,
    title: 'Drone Exp Zone',
    image: Drone,
    description: "AN EXHILARATING HIGH-SPEED COMPETITION WHERE PARTICIPANTS PILOT DRONES THROUGH CHALLENGING OBSTACLE COURSES IN A TEST OF SKILL AND PRECISION.",
  },
  {
    id: 5,
    title: 'Robo Exp Zone',
    image: Robo,
    description: 'Challenge conventional thinking and push boundaries in this unconventional event.'
  },
  {
    id: 6,
    title: 'DIFFUSE',
    image: Events,
    description: "DIFFUSE IS A THRILLING EVENT WHERE PARTICIPANTS RACE AGAINST TIME TO DISASSEMBLE A SIMULATED BOMB USING HARDWARE ELEMENTS LIKE ARDUINOS, LEDS, AND JUMPER WIRES.",
  },
  {
    id: 7,
    title: 'GAMERS ASYLUM',
    image: Events,
    description: "GAMERS ASYLUM IS A COMPETITIVE EVENT WHERE COLLEGE STUDENTS FACE OFF IN POPULAR VIDEO GAMES, HIGHLIGHTING THEIR SKILLS AND PASSION FOR GAMING.",
  },
  {
    id: 8,
    title: 'ELICIT EXPO',
    image: ElicitExpo,
    description: "THE ULTIMATE EXHIBITION OF INNOVATION! A SHOWCASE OF EVERYTHING ROBOTICS",
  },
  {
    id: 9,
    title: 'Kagglethon',
    image: Events,
    description: "A DATA SCIENCE SHOWDOWN FOR MACHINE LEARNING MASTERS WHICH ALLOWS PATICIPANTS TO COMPETE IN SOLVING MACHINE LEARNING PROBLEMS",
  },
  {
    id: 10,
    title: 'CODERS FEUD',
    image: Events,
    description: 'Challenge conventional thinking and push boundaries in this unconventional event.'
  },
];

const EventPanel = ({ title, image, description }) => (
  <div className="bg-black rounded-lg overflow-hidden flex transition-all duration-200 hover:scale-110 m-30 group">
    <div className="w-2/4 h-30">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="w-2/4 relative">
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-black transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-purple-500 text-3xl font-bold text-center">{title}</h3>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xs font-bold text-center mb-4">{description}</p>
        <button className="bg-purple-500 text-white px-5 py-2 font-bold rounded-xl hover:bg-purple-700 transition-colors duration-300 text-xs">
          Register
        </button>
      </div>
    </div>
  </div>
);

export default function ElicitEvents() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-purple-500">
        ELICIT EVENTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventPanel
            key={event.id}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}