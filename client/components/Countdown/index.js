import React from 'react';

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

export default ({time}) => (
  <div>
    <p>Time: {format(time)}</p>
  </div>
);
