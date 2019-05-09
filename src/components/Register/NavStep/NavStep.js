
import React,{Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavStep.css';
import cx from 'classnames';
import _ from 'lodash';

class NavStep extends Component {
  static propTypes = {
    step: PropTypes.number
  };
  static defaultProps = {
    step: 1
  };

  render() {
    let self = this;
    let navArr = [
      {key: 1, text: 'Provide your email'},
      {key: 2, text: 'Verify email'},
      {key: 3, text: 'Set password'},
      {key: 4, text: '🚀'},
    ]
    return (
      <ul className={cx(s.progress,s.clearfix)}>
      {
        _.map(navArr, function (item, index) {
          return (
            <li
              key={index}
              className={self.props.step == _.get(item, 'key') ? s.current : null}
              >
              <i>{_.get(item, 'key')}</i>
              <span>{_.get(item, 'text')}</span>
              <em><img src={require('./arrow.png')} /></em>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default withStyles(s)(NavStep);
