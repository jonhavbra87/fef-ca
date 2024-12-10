import styled from 'styled-components';

// Define a styled H1 element using styled-components
const GradientHeading = styled.h1`
  font-size: 2.5rem; /* Base font size for mobile */
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1rem;
  background: linear-gradient(50deg, #522c5d, #987185, #f4e2d1);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.05em;
  transition:
    color 0.4s ease-in-out,
    transform 0.2s ease-in-out;

  /* Responsive font sizes */
  @media (min-width: 640px) {
    font-size: 3rem; /* Medium devices (e.g., tablets) */
  }
  @media (min-width: 1024px) {
    font-size: 4rem; /* Large devices (e.g., desktops) */
  }
`;

export default GradientHeading;
