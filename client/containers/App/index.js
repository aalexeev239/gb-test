import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import QuestionList from '../QuestionList';
import * as TodoActions from '../../actions/todos';
import * as TestActions from '../../actions/tests';


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
    actions: bindActionCreators({...TodoActions, ...TestActions}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
