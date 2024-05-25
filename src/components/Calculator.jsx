import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'C') {
      setDisplayValue('0');
      setOperator(null);
      setFirstOperand(null);
      setWaitingForSecondOperand(false);
      return;
    }
  
    if (['+', '-', '*', '/'].includes(buttonName)) {
      if (firstOperand == null) {
        setFirstOperand(parseFloat(displayValue));
      } else if (operator) {
        const result = performCalculation();
        setDisplayValue(String(result));
        setFirstOperand(result);
      }
      setWaitingForSecondOperand(true);
      setOperator(buttonName);
      return;
    }
  
    if (buttonName === '=') {
      if (operator && firstOperand != null) {
        const result = performCalculation();
        setDisplayValue(String(result));
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
      }
      return;
    }
  
    if (waitingForSecondOperand) {
      setDisplayValue(buttonName);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? buttonName : displayValue + buttonName);
    }
  };
  
  const performCalculation = () => {
    const secondOperand = parseFloat(displayValue);
    if (operator === '+') {
      return firstOperand + secondOperand;
    }
    if (operator === '-') {
      return firstOperand - secondOperand;
    }
    if (operator === '*') {
      return firstOperand * secondOperand;
    }
    if (operator === '/') {
      return firstOperand / secondOperand;
    }
    return secondOperand;
  };
  

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel clickHandler={handleButtonClick} />
    </div>
  );
};

export default Calculator;
