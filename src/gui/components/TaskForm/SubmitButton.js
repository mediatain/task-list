import styled from 'styled-components';
import Button from './Button';
import { confirmColor } from '../../colors';

export default styled(Button).attrs({
  type: 'submit',
})`
  background: ${confirmColor};
  margin-left: .5rem;

  @media (max-width: 38rem) {
    padding: .25rem 1rem;
    font-size: 1rem;
    flex-grow: 1;
    margin-left: 0;
    margin-top: .5rem;
  }
`;
