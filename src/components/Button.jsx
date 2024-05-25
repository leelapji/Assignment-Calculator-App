import React from 'react';

const Button = ({ name, clickHandler, className = '' }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
