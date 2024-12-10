import styled from 'styled-components';

export const SearchButton = styled.button`
  background: linear-gradient(50deg, #423736, #d6aa9f);
  color: #fff;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-size: 200%;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    background-position 0.3s ease-in-out,
    color 0.2s ease-in-out 0.2s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background-position: right;
    color: #423736;
  }
`;
