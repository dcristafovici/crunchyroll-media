import styled from "styled-components";

export const FilterBarStyled = styled.div`
  .filter-bar {
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter-input {
    flex: 1;
    padding: 8px;
    font-size: 16px;
  }

  .filter-tabs {
    display: flex;
  }

  .filter-tab {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    border: none;
    padding: 8px 15px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-size: 14px;
  }

  .filter-tab:hover {
    background-color: #c0392b;
  }

  .filter-tab.active {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
  }
`;
