import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionList from '../QuestionList';
import * as Actions from '../../actions';
import Header from '../../components/Header';
import Aside from '../../components/Aside';


class App extends Component {

  componentDidMount() {
    this.props.loadAllQuestions();
  }

  render() {
    const {questions} = this.props;
    return (
      <div>
        <Aside />
        <Header />
        <div className="container container-gb footer-stick">
          <QuestionList questions={questions}/>
        </div>
      </div>
    )
  }
}

export default connect(
  ({questions}) => ({questions}),
  Actions
)(App)
