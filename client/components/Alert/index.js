import React from 'react';
import classNames from "classnames";
import style from './style.css';

export default ({alert: {text, isShown}}) => {

  const alertClass = classNames({
    [style['alert']]: true,
    [style['alert-hidden']]: !isShown
  });

  return (
    <div className={alertClass}>
      <div className="container container-gb footer-stick">
        {text}
      </div>
    </div>
  )
};
