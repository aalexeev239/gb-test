import React, {Component} from 'react';

class Countdown extends Component {
  // static contextTypes = {
  //   store: React.PropTypes.object
  // };

  render() {
    return (
      <div>
        {/*<h1>Time: {this.format(this.props.time)}</h1>*/}
        <button onClick={this.props.start}>Start
        </button>
      </div>
    )
  }

  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    }

    time = new Date(time);
    let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);
    let ms = pad(time.getMilliseconds().toString(), 3);

    return `${m} : ${s} . ${ms}`;
  }


}

export default Countdown;
