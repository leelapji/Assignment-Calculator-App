import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="button-panel">
    <Button name="C" clickHandler={clickHandler} className="clear" />
    <Button name="±" clickHandler={clickHandler} />
    <Button name="%" clickHandler={clickHandler} />
    <Button name="/" clickHandler={clickHandler} className="operator" />
    
    <Button name="7" clickHandler={clickHandler} />
    <Button name="8" clickHandler={clickHandler} />
    <Button name="9" clickHandler={clickHandler} />
    <Button name="*" clickHandler={clickHandler} className="operator" />
    
    <Button name="4" clickHandler={clickHandler} />
    <Button name="5" clickHandler={clickHandler} />
    <Button name="6" clickHandler={clickHandler} />
    <Button name="-" clickHandler={clickHandler} className="operator" />
    
    <Button name="1" clickHandler={clickHandler} />
    <Button name="2" clickHandler={clickHandler} />
    <Button name="3" clickHandler={clickHandler} />
    <Button name="+" clickHandler={clickHandler} className="operator" />
    
    <Button name="0" clickHandler={clickHandler} className="zero" />
    <Button name="." clickHandler={clickHandler} />
    <Button name="=" clickHandler={clickHandler} className="equals" />
  </div>
);

export default ButtonPanel;
