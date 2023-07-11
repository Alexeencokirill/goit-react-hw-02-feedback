import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 8px 15px;
    background-color: beige;
    color: black;
    text-transform: capitalize;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;

  

  & :hover {
    background-color: white;
    transform: scale(1.1);
  }
`;
