import styled from 'styled-components';

export const CardButton = styled.button`
  background: linear-gradient(50deg, #D72638, #F6606D, #4A4A4A);
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
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background-position: right;
    color: #fff;
  }
`;
