import React from 'react';
import '../styles/CascadingSquares.css';
import image1 from '../assets/images/square8.png';
import image2 from '../assets/images/square7.png';
import image3 from '../assets/images/square6.png';
import image4 from '../assets/images/square5.png';
import image5 from '../assets/images/square4.png';

import "../styles/fonts.css";


const CascadingSquares = ({ className, style }) => {
  const squares = [
    { id: 'square1', top: '0px', left: '200px', rotate: '15deg', image: image1 },
    { id: 'square2', top: '-20px', left: '240px', rotate: '5deg', image: image2 },
    { id: 'square3', top: '-30px', left: '280px', rotate: '-5deg', image: image3 },
    { id: 'square4', top: '-10px', left: '320px', rotate: '-15deg', image: image4 },
    { id: 'square5', top: '20px', left: '360px', rotate: '-25deg', image: image5 },
  ];

  return (
    <div className={`cascading-squares-container ${className}`} style={style}>
      {squares.map((square) => (
        <div
          key={square.id}
          className="cascading-square"
          style={{
            top: square.top,
            left: square.left,
            transform: `rotate(${square.rotate})`,
          }}
        >
          <img 
            src={square.image} 
            alt={`Square ${square.id.slice(-1)}`} 
            className="square-image"
          />
        </div>
      ))}
    </div>
  );
};

export default CascadingSquares;
