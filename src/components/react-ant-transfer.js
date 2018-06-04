import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Transfer } from 'antd';
import { returnEventTarget } from 'next-return-event';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.array,
    template: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop,
    template: noop,
    value:[]
  };
  /*===properties end===*/

  _onChange = inEvent => {
    this.props.onChange( returnEventTarget(inEvent) );
  };

  render() {
    const { className, items, template, value, onChange, ...props } = this.props;
    return (
      <Transfer
        dataSource={items}
        listStyle={{ width: 300, height: 300, }}
        targetKeys={value}
        className={classNames('react-ant-transfer', className)}
        onChange={this._onChange}
        render={template}
        {...props} />
    );
  }
}
