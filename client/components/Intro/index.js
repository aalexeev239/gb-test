import React from 'react';

import style from './style.css';


export default ({handleClick, isDisabled}) => (
  <div >
    Начать тест

    <br/>
    Спойлер: правильными являются все первые варианты ответов
    <br/>

    <button onClick={handleClick} disabled={isDisabled}>Start</button>
  </div>);

