import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from '../../actions';

import Intro from '../../components/Intro';
import Question from '../../components/Question';
import Result from '../../components/Result';

import Countdown from '../../components/Countdown';

import {CHALLENGE_ON, PROGRESS, FINISH} from '../../constants/actions';


class QuestionList extends Component {
  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {challenge:{status, current, canGoNext, total, answers}, questions} = this.props;

    switch (status) {

      case CHALLENGE_ON + PROGRESS:
        return (
          <div>
            <Question
              question={questions.items[current]}
              selectAnswer={this.selectAnswer.bind(this)}
              selectedAnswerId={answers[current] ? answers[current].answer_id : null}
            />
            <hr/>
            <Countdown time={10000}/>
            <p>Вопрос {current + 1} из {total}</p>
            <button onClick={this.handleNext.bind(this)} disabled={!canGoNext}>Дальше</button>
          </div>
        );

      case CHALLENGE_ON + FINISH:
        return <Result restart={this.startChallenge.bind(this)} challenge={this.props.challenge}/>;

      default:
        return <Intro handleClick={this.startChallenge.bind(this)} isDisabled={!questions.loaded}/>
    }
  }

  startChallenge() {
    const {questions, startChallenge} = this.props;
    startChallenge(questions.items.length);
  }

  selectAnswer(ev) {
    const {challenge: {current}, questions, selectAnswer} = this.props;
    selectAnswer({
      current,
      question_id: questions.items[current].id,
      answer_id: parseInt(ev.target.value, 10)
    });
  }

  handleNext(ev) {
    this.props.goNext();
  }
}

export default connect(
  ({challenge}) => ({challenge}),
  Actions
)(QuestionList);
