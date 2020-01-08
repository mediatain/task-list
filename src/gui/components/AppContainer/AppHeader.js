import styled from 'styled-components';
import { headerColor, textColorLight } from '../../colors';
import { elevation4 } from '../../elevations';

export default styled.header`
  background-color: ${headerColor};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 3.5rem;
  color: ${textColorLight};
  padding-left: 1rem;
  box-shadow: ${elevation4};
`;
