import React from 'react';

const Button = props => ({
    render() {
      return <p>The logged in user is: {this.props.username}</p>;
    },
  });