import React, { Component } from 'react'

export default class ControlledInput extends Component {
  state = {
    value: '',
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
 
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}