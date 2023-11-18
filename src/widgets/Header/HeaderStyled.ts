import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  .header {
    &-navigation {
      height: inherit;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        li {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
          a {
            text-decoration: none;
            color: inherit;
            outline: none;
            font-size: 20px;
            transition: all 0.3s ease-in-out;
            color: ${(props) => props.theme.colors.text};
            &.active {
              color: ${(props) => props.theme.colors.background};
            }
          }
        }
      }
    }
  }
`;
