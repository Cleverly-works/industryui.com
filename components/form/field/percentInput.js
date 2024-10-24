/**
 * Components - Forms - Precent Input
 */

// React
import React from 'react'
import { bool, func, object, oneOfType, string } from 'prop-types'

// UI
import FormField from './input'
import FormLabel from '../label/label'
import InputGroup from '../inputGroup/group'
import InputGroupAddon from '../inputGroup/addon'

const PercentInput = ({ errors, label, name, register, show, symbol }) => {
  return (
    <FormLabel show={show} label={label}>
      <InputGroup>
        <FormField errors={errors} name={name} register={register} step="any" type="number" />
        <InputGroupAddon addonType="append" text>
          {symbol}
        </InputGroupAddon>
      </InputGroup>
    </FormLabel>
  )
}

PercentInput.propTypes = {
  errors: object.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  symbol: oneOfType([object, string])
}

PercentInput.defaultProps = {
  show: true,
  symbol: '%'
}

export default PercentInput
