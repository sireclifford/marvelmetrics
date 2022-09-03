import React from 'react';
import Carousel from 'nuka-carousel';
import Joker from './joker.png';
import BlackPanther from './black-panther.jpeg';

export default function Stats() {
  return (
    <div>
      <div className="stats-content">
        <Carousel wrapAround animation="zoom">
          <img src={Joker} alt="joker" />
          <img src={BlackPanther} alt="black panther" />
        </Carousel>
      </div>
    </div>
  );
}
