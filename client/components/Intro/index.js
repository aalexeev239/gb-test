import React, {Component} from 'react';

class Intro extends Component {
  render() {
    const {handleClick, isDisabled} = this.props;
    return (
      <div>
        Начать тест

        <br/>
        Спойлер: правильными являются все первые варианты ответов
        <br/>

        <button onClick={handleClick} disabled={isDisabled}>Start</button>
      </div>
    )
  }
}

export default Intro;
