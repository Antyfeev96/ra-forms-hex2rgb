import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../Form/Form'

export default function Converter() {
  const [state, setState] = useState('#fff');
  return (
    <div className="converter">
      <Form color={state} />
    </div>
  )
}

Converter.propTypes = {

}
