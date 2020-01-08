import styled, { css } from 'styled-components';

export default styled.div`
  position: absolute;
  display: flex;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transition-property: width, opacity;
  transition: 150ms ease-in-out;

  ${({ visible }) => visible && css`
    width: 100%;
    opacity: 1;
    overflow: visible;
  `}
`;
