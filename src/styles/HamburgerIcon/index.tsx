import styled from 'styled-components';

export const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  color: #845162;
  font-size: 2rem;
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.5s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;
