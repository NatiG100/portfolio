import React from 'react'
import {
    StyledImage,
    StyledImageBorder,
    StyledImageDisplay,
    StyledImageOverlay
} from './ImageDisplayElements';

const ImageDisplay = ({dimension="200px", img}) => {
  return (
      <StyledImageDisplay dimension={dimension}>
          <StyledImageBorder/>
          <StyledImage src={img}/>
          <StyledImageOverlay/>
      </StyledImageDisplay>
  )
}

export default ImageDisplay;