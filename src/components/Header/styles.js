import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({isMobile}) => {
    if (isMobile) {
      return `0`
    } else {
      return `20px 15rem;`
    }
  }};
  /* max-width: 1200px; */

  li + li {
    margin-left: 10px;
  }

  ul, li {
    display: flex;
    flex-direction: ${({isMobile}) => {
      if (isMobile) {
        return `column`;
      } else {
        return `row`
      }
    }}
  }

  a {
    color: rgb(76, 82, 112);
  }

  button {
    background-color: transparent;
    border: 0;
  }

  img {
    margin-left: ${({isMobile}) => {
      if (isMobile) {
        return `4rem`
      } else {
        return null
      }
    }}
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;