import React, {Component} from 'react';
import style from './style.css';
import hljs from 'highlightjs';
import 'highlightjs/styles/default.css';
import 'highlightjs/styles/idea.css';

class Highlighted extends Component {

  componentDidMount() {
    this.rehighlight()
  }

  componentDidUpdate() {
    this.rehighlight()
  }

  render() {
    const {html} = this.props;
    return (
      <div
        className={style['highlighted']}
        ref={(htmlContainer) => this.htmlContainer = htmlContainer}
        dangerouslySetInnerHTML={{__html: html}}></div>
    )
  }

  rehighlight() {
    const preList = Array.from(this.htmlContainer.querySelectorAll('pre'));
    preList.forEach((item) => {
      hljs.highlightBlock(item)
    });
  }
}

export default Highlighted;
