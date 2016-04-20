import React, { Component, PropTypes } from 'react'

export class First extends React.Component {

  static propTypes = {
    text: React.PropTypes.string,
  }

  static contextTypes = {
    importantContextType : React.PropTypes.string,
  }

  handleClick() {}

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export class Second extends Component {

  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

const StateLessComponent = ({ id, enabled }) =>
  <div id={id} disabled={!enabled} />

StateLessComponent.propTypes = {
  id : PropTypes.string.isRequired,
  enabled : PropTypes.boolean,
}


const AnotherStateless = ({ id, enabled }) =>
  <div id={id} disabled={!enabled} />

AnotherStateless.propTypes = {};
AnotherStateless.propTypes.test = PropTypes.string.isRequired;
AnotherStateless.propTypes.test2 = PropTypes.func.isRequired;

