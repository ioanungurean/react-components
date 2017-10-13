import React from 'react';
import PropTypes from 'prop-types';

/** React component for demonstration purposes */
const HelloWorld = ({message}) => {
  return (<div> Hello {message} </div>);
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string,
};

HelloWorld.defaultProps = {
  /** Message to display */
  message: 'World',
};


export default HelloWorld;
