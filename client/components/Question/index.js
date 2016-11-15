import React from 'react';
import Radio from '../Radio';

export default ({question, selectAnswer, selectedAnswerId}) => {
  const opts = question.options.map((opt)=>(
    <Radio
      key={opt.id}
      name={question.id}
      answer={opt}
      selectAnswer={selectAnswer}
      isSelected={selectedAnswerId == opt.id}
    />
  ));

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: question.title}}></div>
      {opts}
    </div>
  )
};
