import styled from 'styled-components';
import Button from './Button';
import { cancelColor } from '../../colors';

export default styled(Button).attrs({
  type: 'reset',
})`
  background: ${cancelColor};

  @media (max-width: 38rem) {
    padding: .25rem 1rem;
    font-size: 1rem;
    flex-grow: 1;
  }
`;
