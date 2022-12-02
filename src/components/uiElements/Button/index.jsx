import React from 'react'

import {StyledButton} from './ButtonElements'

const Button = ({children, size="sm", onClick = ()=>{}}) => {
  return (
    <StyledButton onClick={onClick} size={size}>{children}</StyledButton>
  )
}

export default Button;