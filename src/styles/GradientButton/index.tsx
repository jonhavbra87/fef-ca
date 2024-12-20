import styled, { keyframes } from 'styled-components';

// Keyframes for "shine" animation
const shine = keyframes`
  0% {
    left: -100px;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
`;

// Styled Component for knappen - creds to: https://designyff.com/codes/shining-button/

export const GradientButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  background: #1e7e34;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: ${shine} 3s infinite linear;
  }
    
  /* Style for disabled condition */
  &:disabled {
    background: #d4d4d4; 
    color: #a0a0a0; 
    cursor: not-allowed; 
    box-shadow: none; 
  }

  &:disabled::before {
    display: none;
  }
`;
