import React from 'react';

import style from './style.css';

const pad = (time, length) => {
  while (time.length < length) {
    time = '0' + time;
  }
  return time;
};

const format = (time) => {
  time = new Date(time);
  let m = pad(time.getMinutes().toString(), 2);
  let s = pad(time.getSeconds().toString(), 2);

  return `${m} : ${s}`;
};

export default ({time, handlePause}) => (
  <div className={style['countdown']}>
    <div className={style['countdown__time']}>
      {format(time)}
    </div>
    <button type="button" onClick={handlePause} className={style['countdown__btn']}>
      Pause
    </button>
  </div>
);
