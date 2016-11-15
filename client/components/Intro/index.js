import React, {Component} from 'react';

class Intro extends Component {
  render() {
    const {handleClick, isDisabled} = this.props;
    return (
      <div>
        Intro component
        <br/>
        <button onClick={handleClick} disabled={isDisabled}>Start</button>
      </div>
    )
  }
}

export default Intro;
