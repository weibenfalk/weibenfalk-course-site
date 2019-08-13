import React from 'react';

// Styled Component
import { StyledButton } from './styles/StyledButton';

const Button = ({ size, color, text }) => (
  <StyledButton size={size} color={color}>
    {text}
  </StyledButton>
);

export default Button;
