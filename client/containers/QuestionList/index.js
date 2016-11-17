import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from '../../actions';

import Intro from '../../components/Intro';
import Question from '../../components/Question';
import Result from '../../components/Result';
import QuestionFooter from '../../components/QuestionFooter';


import {CHALLENGE_ON, PROGRESS, FINISH} from '../../constants/actions';

import style from "./style.css";


class QuestionList extends Component {
  render() {
    return (
      <div className={style.content}>

        <div className={style.content__nav}>
          <a href="#" className={style['content__nav-elem']}>Тема: Работа с массивами</a>
          <a href="#" className={style['content__nav-elem']}>Сообщить об ошибке</a>
        </div>

        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {challenge, questions, countdown, alert} = this.props;
    const {challenge:{status, current, answers}} = this.props;

    switch (status) {

      case CHALLENGE_ON + PROGRESS:
        return (
          <div>
            <Question
              question={questions.items[current]}
              selectAnswer={this.selectAnswer.bind(this)}
              selectedAnswerId={answers[current] ? answers[current].answer_id : null}
            />
            <QuestionFooter
              alert={alert}
              challenge={challenge}
              countdown={countdown}
              next={this.handleNext.bind(this)}
            />
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

  handleNext() {
    this.props.goNext();
  }
}

export default connect(
  ({challenge, countdown, alert}) => ({challenge, countdown, alert}),
  Actions
)(QuestionList);
