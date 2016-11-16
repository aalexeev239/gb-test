import React from 'react';

import style from './style.css';

export default ({handleClick, isDisabled}) => (
  <div>
    <h2 className={style.content__title}>Начать тест</h2>

    <p className={style.content__text}>Спойлер: правильными являются все первые варианты ответов</p>

    <button className={style.btn} onClick={handleClick} disabled={isDisabled}>Начать</button>
  </div>
);

