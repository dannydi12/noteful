import React from 'react';
import PropTypes from 'prop-types';


export default function ValidationError (props) {
  return(
    <div>
      <p>{props.message}</p>
    </div>
  );
}

// ValidationError.propTypes = {
//   message: PropTypes.string.isRequired
// }