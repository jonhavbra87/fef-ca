// src/styles/NavBarStyles.ts
import styled, { keyframes } from 'styled-components';

// Definerer en keyframe for å animere menyen
const slideDown = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Definerer en keyframe for å animere menyen når den lukkes
const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
  `;

// Styled komponent for navigasjonsmenyen
export const NavMenu = styled.nav<{ isopen: boolean }>`
  display: ${({ isopen }) => (isopen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: #150016;
  padding: 1rem;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 40;
  gap: 1rem;
  overflow: hidden;

  /* Animasjon: Bruker slideDown når menyen åpnes og slideUp når den lukkes */
  animation: ${({ isopen }) => (isopen ? slideDown : slideUp)} 0.5s ease-in-out;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 1.5rem;
    animation: none;
  }
`;
