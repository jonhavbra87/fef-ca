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
  background: #28a745; /* Grønn farge */
  color: white;
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
    animation: ${shine} 3s infinite linear; /* Kobler animasjonen */
  }
     /* Style for disabled condition */
  &:disabled {
    background: #d4d4d4; /* Grå bakgrunn for deaktivert knapp */
    color: #a0a0a0; /* Lysere tekstfarge */
    cursor: not-allowed; /* Endrer musepekeren */
    box-shadow: none; /* Ingen skygge når deaktivert */
  }

  &:disabled::before {
    display: none; /* Fjerner shine-effekten når knappen er deaktivert */
  }
`;

