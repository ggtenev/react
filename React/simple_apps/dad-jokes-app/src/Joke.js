import React from 'react';

const Joke = ({votes,text}) => {
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up"></i>
        <span>{votes}</span>
        <i className="fas fa-arrow-down"></i>
      </div>
      <div className="Joke-text">
        {text}
      </div>
    </div>
  );
};

export default Joke;