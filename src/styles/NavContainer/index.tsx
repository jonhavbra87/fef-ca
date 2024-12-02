import styled from 'styled-components';

// Navigation container styled component
const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    color: #ffe3d8;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-blush); /* Matches your hover color palette */
    }
  }
`;

export default NavContainer;
