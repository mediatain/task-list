import styled, { css } from 'styled-components';
import { taskItemColor, textColorDark } from '../../colors';
import { elevation2, elevation8 } from '../../elevations';

export default styled.button.attrs({
  type: 'button',
})`
  background: ${taskItemColor};
  color: ${textColorDark};
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  elevation: above;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  box-shadow: ${elevation2};
  transition-property: box-shadow, opacity;
  transition: 150ms ease-in-out;
  
  &:hover {
    box-shadow: ${elevation8};
  }
  
  ${({ invisible }) => invisible && css`
    opacity: 0;
    overflow: hidden;
  `}
`;
