import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import QuestionList from '../QuestionList';
import * as Actions from '../../actions';


class App extends Component {

  componentDidMount() {
    this.props.actions.loadAllQuestions();
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

function mapStateToProps(state) {
  return {
    todos: state.todos,
    questions: state.questions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...Actions}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
