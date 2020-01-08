import React from 'react';
import styled from 'styled-components';
import { disabledColor } from '../../colors';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.7rem;
  padding-left: .1rem;
  cursor: pointer;
`;

const Box = styled.div`
  position: relative;
  border: .1rem solid;
  border-radius: .25rem;
  height: 1.5rem;
  width: 1.5rem;
  color: ${disabledColor};
`;

const Mark = styled.div`
  position: absolute;
  left: .3rem;
  top: .5rem;
  width: .2rem;
  height: 1rem;
  background: ${disabledColor};
  transform: rotate(315deg);
  display: ${({ checked }) => checked ? 'block' : 'none'};

  &::after {
    position: absolute;
    left: 100%;
    bottom: 0;
    content: "";
    background: inherit;
    width: 2rem;
    height: .2rem;
  }
`;

export default function Checkbox({
  checked = false,
  onClick,
}) {
  return (
    <StyledCheckbox onClick={onClick}>
      <Box>
        <Mark checked={checked} />
      </Box>
    </StyledCheckbox>
  );
}

