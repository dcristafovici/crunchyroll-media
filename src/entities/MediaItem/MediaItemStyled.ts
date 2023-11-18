import styled from "styled-components";

export const MediaItemStyled = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
    span {
      font-weight: bold;
    }
  }
  .media {
    &-info {
      flex: 1;
    }
    &-buttons {
      button {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.background};
        border: none;
        padding: 8px 15px;
        margin-left: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;

        font-size: 16px;
        font-weight: bold;
        &:hover {
          background-color: #c0392b;
        }
        &:first-child {
          background-color: ${(props) => props.theme.colors.primary};
          &:hover {
            background-color: #3445db;
          }
        }
      }
    }
  }
`;
