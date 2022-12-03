import React from 'react'
import {StyledDivider} from './DividerElements';

const Divider = ({direction="horizontal", height="100%", width="100%" }) => {
  return (
    <StyledDivider direction={direction} height={height} width={width}/>
  )
}

export default Divider

