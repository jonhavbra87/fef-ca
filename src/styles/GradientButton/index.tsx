import styled from 'styled-components';

export const GradientButton = styled.button`
  background: linear-gradient(50deg, #150016, #29104a, #ffe3d8);
  color: #fff;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-size: 200%;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    background-position 0.5s ease-in-out,
    color 0.5s ease-in-out 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background-position: right;
    color: #150016;
  }
`;
