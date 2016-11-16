import React from 'react';
import classNames from 'classnames';
import Highlighted from '../Highlighted';

import style from './style.css';


export default ({selectAnswer, isSelected, answer, name, isEven}) => {

  const labelClass = classNames({
    [style['radio']]: true,
    [style['radio--selected']]: isSelected
  });

  return (
    <label htmlFor={answer.id} className={labelClass}>
      {isEven}
      <input
        type="radio"
        name={name}
        id={answer.id}
        className={style.radio__inp}
        onChange={selectAnswer}
        value={answer.id}
        disabled={isSelected}/>
      <span className={style.radio__ind}></span>

      <Highlighted html={answer.title}/>
    </label>
  )
}
