import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${props => props.isOpen ? '50%' : '48px'};
  background-color: rgba(247, 190, 192, 0.8);
  height: ${props => props.isOpen ? '100vh' : 'auto'};
  flex-direction: column;
  display: flex;
  padding: 15px 10px;
  margin-bottom: 12px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  transition: width 0.3s ease-out, height 0.3s ease-out;

  div {
    ul, li {
      margin-top: 2rem;
    }
  }
`;

