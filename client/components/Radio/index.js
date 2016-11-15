import React, {Component} from 'react';
import classNames from 'classnames';
import style from './style.css';


class Radio extends Component {
  render() {
    const {selectAnswer, isSelected, answer, name} = this.props;

    // TODO: remove BEM
    // BEM + CSS Modules = bad idea
    const labelClass = classNames({
      [style.radio]: true,
      [style['radio--selected']]: isSelected
    });

    return (
      <label htmlFor={answer.id} className={labelClass}>
        <input
          type="radio"
          name={name}
          id={answer.id}
          className={style.radio__inp}
          onChange={selectAnswer}
          value={answer.id}
          disabled={isSelected}/>
        <span dangerouslySetInnerHTML={{__html: answer.title}}></span>
      </label>
    )
  }
}

export default Radio;
