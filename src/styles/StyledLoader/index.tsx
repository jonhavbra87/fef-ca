import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const prixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`;
// Styled Component for Loader Container
export const LoaderContainer = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100vh !important;
  width: 100vw !important;
`;

// Styled Component for Loader
export const StyledLoader = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  &::before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #ffc857;
    animation: ${prixClipFix} 2s linear infinite;
  }

  &::after {
    border-color: #1a202c;
    animation:
      ${prixClipFix} 2s linear infinite,
      ${rotate} 0.5s linear infinite reverse;
    inset: 6px;
  }

  // Responsiveness for smaller devices
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

export default StyledLoader;
