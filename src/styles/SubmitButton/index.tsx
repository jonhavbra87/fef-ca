import styled from 'styled-components';

// Lag en stilig Submit-knapp
export const SubmitButton = styled.button`
  background: linear-gradient(90deg, #28a745, #218838); /* Grønn gradient */
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      #218838,
      #1e7e34
    ); /* Mørkere grønn på hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Legger til en subtil skygge */
  }

  &:active {
    transform: scale(0.98); /* Gir en trykkeffekt */
  }

  &:disabled {
    background: #d4d4d4; /* Grå bakgrunn for deaktivert knapp */
    color: #a0a0a0; /* Lysere tekst */
    cursor: not-allowed;
    box-shadow: none;
  }
`;
