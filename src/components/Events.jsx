import { color } from 'framer-motion';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function Events() {
  const events = [
    ['Standout', 'This is standout'],
    ['Ideathon', 'This is Ideathon'],
    ['Ideathon', 'This is Ideathon'],
    ['Ideathon', 'This is Ideathon'],
  ];

  return (
    <div className="Events w-[70%] mx-auto mt-10 flex items-center justify-center flex-wrap">
      <div className="title w-full">
        <h1 className="text-center text-white text-4xl">Events</h1>
      </div>
      {events.map((event, idx) => (
        <Flippy
          key={idx}
          flipOnHover={false} // enable flip on click
          flipOnClick={true}
          className="m-[2vw] cursor-pointer"
          style={{ width: '50vh', height: '50vh' }} // card size
        >
          <FrontSide
            style={{
              backgroundColor: 'black',
              color:"white",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
            }}
          >
            {event[1]} {/* Front side content */}
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
            }}
          >
            {event[0]} {/* Back side content */}
          </BackSide>
        </Flippy>
      ))}
    </div>
  );
}

export default Events;
