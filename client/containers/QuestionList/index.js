import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as TestActions from '../../actions/tests';

import Intro from '../../components/Intro';
import Question from '../../components/Question';

import {CHALLENGE_ON, PROGRESS} from '../../constants/actions';


class QuestionList extends Component {
  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {challenge, questions} = this.props;

    switch (challenge.status) {

      case CHALLENGE_ON + PROGRESS:
        return (
          <div>
            <Question question={questions.items[challenge.current]}/>
            <button onClick={this.handleNext.bind(this)}>Жопиздан</button>
          </div>
          )

      default:
        return <Intro handleClick={this.startChallenge.bind(this)} isDisabled={!questions.loaded}/>
    }
  }

  startChallenge() {
    const {actions, questions} = this.props;
    actions.startChallenge(questions.items.length);
  }

  handleNext(ev) {
    console.log('--- ev', ev);
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
