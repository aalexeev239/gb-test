import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import * as TodoActions from '../../actions/todos';
import * as TestActions from '../../actions/tests';
import style from './style.css';

class App extends Component {

  componentDidMount() {
    this.props.actions.loadAllQuestions();
  }

  render() {
    const {todos, actions, children} = this.props;
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}/>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {challenge} = this.props;

    switch (challenge) {
      default:
        return <Intro>
    }
  }


}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    questions: state.questions,
    challenge: state.challenge
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
