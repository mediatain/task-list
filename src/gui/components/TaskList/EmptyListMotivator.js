import styled from 'styled-components';
import { textColorDark } from '../../colors';

export default styled.div`
  position: relative;
  font-size: 2rem;
  color: ${textColorDark};
  padding-left: 5rem;
  padding-top: 2rem;

  &::before {
    position: absolute;
    left: 1rem;
    top: -.5rem;
    content: "⤶";
    font-size: 200%;
    font-weight: 200;
    transform: rotate(90deg);
  }
`;
