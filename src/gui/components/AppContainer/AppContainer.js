import React from 'react';
import styled from 'styled-components';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import { backgroundColor } from '../../colors';

const StyledAppContainer = styled.div`
  background-color: ${backgroundColor};
  min-height: 100vh;
  min-width: 20rem;
`;

export default function AppContainer({
  onAddTask,
  onToggleTask,
  tasks,
  title,
}) {
  return (
    <StyledAppContainer>
      <AppHeader>{title}</AppHeader>
      <AppContent>
        <TaskForm onAddTask={onAddTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={onToggleTask}
        />
      </AppContent>
    </StyledAppContainer>
  )
}
