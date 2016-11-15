import React, {Component} from 'react';

class Question extends Component {
  render() {
    const {question} = this.props;

    const options = question.options.map((opt)=><div key={opt.id} dangerouslySetInnerHTML={{__html: opt.title}}></div>);
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: question.title}}></div>
        {options}
      </div>
    )
  }
}

export default Question;
