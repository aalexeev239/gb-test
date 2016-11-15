import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionList from '../QuestionList';
import * as Actions from '../../actions';

class App extends Component {

  componentDidMount() {
    this.props.loadAllQuestions();
  }

  render() {
    const {questions} = this.props;
    return (
      <div>
        <QuestionList questions={questions}/>
      </div>
    )
  }
}

export default connect(
  ({questions}) => ({questions}),
  Actions
)(App)
