import React from 'react';
import Radio from '../Radio';
import Highlighted from '../Highlighted';


import style from './style.css';

export default ({question, selectAnswer, selectedAnswerId}) => {

  const opts = question.options.map((opt) => (
    <Radio
      key={opt.id}
      name={question.id}
      answer={opt}
      selectAnswer={selectAnswer}
      isSelected={selectedAnswerId == opt.id}
    />
  ));

  return (
    <div className={style['question']}>
      {/*<div className={style['question__title']} dangerouslySetInnerHTML={{__html: question.title}}></div>*/}
      <div className={style['question__title']}>
        <Highlighted html={question.title}/>
      </div>
      {opts}
    </div>
  )
};
