import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as TestActions from '../../actions/tests';

import Intro from '../../components/Intro';
import Question from '../../components/Question';

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
    const {challenge:{current, status, canGoNext, total, answers}, questions} = this.props;

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
            <p>Вопрос {current + 1} из {total}</p>
            <button onClick={this.handleNext.bind(this)} disabled={!canGoNext}>Дальше</button>
          </div>
        );

      case CHALLENGE_ON + FINISH:
        return (
          <div>
            Тест завершён.
            Ваш результат:
          </div>
        );

      default:
        return <Intro handleClick={this.startChallenge.bind(this)} isDisabled={!questions.loaded}/>
    }
  }

  startChallenge() {
    const {actions, questions} = this.props;
    actions.startChallenge(questions.items.length);
  }

  selectAnswer(ev) {
    const {challenge: {current}, questions, actions} = this.props;
    actions.selectAnswer({
      current,
      question_id: questions.items[current].id,
      answer_id: ev.target.value
    });
  }

  handleNext(ev) {
    this.props.actions.goNext();
  }
}

function mapStateToProps(state) {
  return {
    challenge: state.challenge
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TestActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
