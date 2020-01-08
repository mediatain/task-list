import React from 'react';
import AppContainer from './gui/components/AppContainer/AppContainer';
import useTaskManager from './gui/useTaskManager';
import { headerTitle } from './gui/strings';

function App() {
  const {
    addTask,
    toggleTask,
    tasks,
  } = useTaskManager();

  return (
    <AppContainer
      title={headerTitle}
      tasks={tasks}
      onAddTask={addTask}
      onToggleTask={toggleTask}
    />
  );
}

export default App;
