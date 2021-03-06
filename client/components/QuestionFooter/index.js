import React from 'react';

import classNames from "classnames";

import Countdown from '../../components/Countdown';
import Alert from '../../components/Alert';

import style from './style.css';

export default ({countdown:{time}, challenge:{current, total, canGoNext}, next, alert, handlePause}) => {
  const btnClasses = classNames({
    [style['btn']]: true,
    [style['btn--fullwidth']]: true,
    [style['btn-disabled']]: !canGoNext
  });

  const paginationClasses = classNames(style['pagination'], style['question-footer__pagination']);


  return (
    <div className={style['question-footer']}>
      <Alert alert={alert}/>
      <div className="container container-gb footer-stick">
        <div className="row">
          <div className="col-sm-4">
            <Countdown time={time} handlePause={handlePause}/>
          </div>
          <div className="col-sm-4">
            <div className={paginationClasses}>
              <span className={style.pagination__current}>{current + 1}</span> / {total}
            </div>
          </div>
          <div className="col-sm-4">
            <button type="button" className={btnClasses} onClick={next} disabled={!canGoNext}>
              Ответить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
