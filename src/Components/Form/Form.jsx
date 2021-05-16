import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  const { color } = props;

  const convertColor = (value) => {
    if (value.length < 7 || value[0] !== '#') return
    const bigint = parseInt(value, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return r + "," + g + "," + b;
  }

  return (
    <form className="form">
      <input type="text" name="hex" id="hex" defaultValue={color} />
      <div id="rgb"></div>
    </form>
  )
}

Form.propTypes = {

}

export default Form

