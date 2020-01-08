import { useState, useEffect } from 'react';
import TaskManager from '../core';

export default function useTaskManager() {
  const [core, setCore] = useState();
  const [tasks, setTasks] = useState([]);

  function addTask(description) {
    core.addTask(description);
  }

  function toggleTask(id) {
    core.toggleTask(id);
  }

  useEffect(() => {
    setCore(new TaskManager());
  }, []);

  useEffect(() => {
    if (core) {
      core.onUpdate(setTasks);
    }
  }, [core]);

  return {
    tasks,
    addTask,
    toggleTask,
  }
}
