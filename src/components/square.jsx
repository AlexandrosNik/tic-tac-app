import React from 'react';

const Square = ({ value, onClick, classWinner}) => {
  return (
    <button className={`square ${classWinner}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;