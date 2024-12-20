import styled from 'styled-components';

export const SearchButton = styled.button`
  background: linear-gradient(90deg, #ffc857, #e6b44d);
  color: #423736;
  padding: 12px 24px;
  font-weight: bold;
  border: none;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #ffd267, #ffc857);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;
