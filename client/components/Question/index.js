import React, {Component} from 'react';
import Radio from '../Radio';


class Question extends Component {
  render() {
    const {question, selectAnswer, selectedAnswerId} = this.props;

    const options = question.options.map((opt)=>(
      <Radio
        key={opt.id}
        name={question.id}
        answer={opt}
        selectAnswer={selectAnswer}
        isSelected={selectedAnswerId == opt.id}/>
    ));

    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: question.title}}></div>
        {options}
      </div>
    )
  }
}

export default Question;
