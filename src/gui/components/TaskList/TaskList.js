import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import EmptyListMotivator from './EmptyListMotivator';
import styled from 'styled-components';

const StyledTaskList = styled.ul`
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;
`;

export default function TaskList({
  tasks = [],
  onToggleTask = () => {},
}) {
  return (
    <StyledTaskList>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onCheck={() => onToggleTask(task.id)}
        />
      ))}
      {tasks.length === 0 && (
        <EmptyListMotivator>Add your first task!</EmptyListMotivator>
      )}
    </StyledTaskList>
  )
}
