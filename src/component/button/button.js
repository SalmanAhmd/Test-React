import React from 'react';
import './button.scss'

export const Button = ({ label }) => {

  return (
    <div data-testid='button' className='button-style' >{label}</div>
  )
}

export default Button;
