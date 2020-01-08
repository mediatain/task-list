import styled from 'styled-components';
import { disabledColor, taskItemColor, textColorDark } from '../../colors';

export default styled.input`
  flex: 1;
  outline: none;
  color: ${textColorDark};
  padding: 0.5rem;
  font-size: 1.5rem;
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
  border-bottom: .2rem solid ${disabledColor};
  width: 0;

  &:focus {
    border-bottom: .2rem solid ${taskItemColor};
  }
`;
