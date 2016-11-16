import React from 'react';
import classNames from 'classnames';
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
      <span dangerouslySetInnerHTML={{__html: answer.title}}></span>
    </label>
  )
}
