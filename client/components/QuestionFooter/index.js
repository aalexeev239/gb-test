import React from 'react';

import classNames from "classnames";

import Countdown from '../../components/Countdown';

import style from './style.css';

export default ({countdown:{time}, challenge:{current, total, canGoNext}, next}) => {
  const btnClasses = classNames({
    [style['btn']]: true,
    [style['btn--fullwidth']]: true,
    [style['btn-disabled']]: !canGoNext
  });
  return (
    <div className={style['question-footer']}>
      <div className="container container-gb footer-stick">
        <div className="row">
          <div className="col-sm-4">
            <Countdown time={time}/>
          </div>
          <div className="col-sm-4">
            <div className={style.pagination}>
              <span className={style.pagination__current}>{current + 1}</span> / {total}
            </div>
          </div>
          <div className="col-sm-4">
            <button className={btnClasses} onClick={next} disabled={!canGoNext}>
              Ответить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
