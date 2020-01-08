import React from 'react';
import CheckBox from './Checkbox';
import TaskDescription from './TaskDescription';
import styled, { css } from 'styled-components';
import { disabledColor, textColorDark } from '../../colors';

const StyledTaskItem = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  color: ${textColorDark};
  
  ${({ done }) => done && css`
    text-decoration: line-through;
    color: ${disabledColor};
  `}
`;

export default function TaskItem({
  task,
  onCheck,
}) {
  return (
    <StyledTaskItem done={task.done}>
      <CheckBox checked={task.done} onClick={onCheck} />
      <TaskDescription>{task.description}</TaskDescription>
    </StyledTaskItem>
  );
}

