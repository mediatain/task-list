import styled from 'styled-components';

export default styled.div`
  display: flex;
  margin-left: .7rem;

  @media (max-width: 38rem) {
    flex-direction: column;
    justify-content: stretch;
  }
`;
