import styled from "styled-components";

export const MediaFormStyled = styled.div`
  margin-top: 30px;
  form {
    max-width: 400px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.background};
    padding: 20px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
    border: none;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease; /* Add a smooth transition effect */
  }

  button:hover {
    background-color: #c0392b; /* Darken the secondary color on hover */
  }
`;
