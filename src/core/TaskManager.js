import AbstractTaskManager from './AbstractTaskManager';
import Task from './Task';

export default class TaskManager extends AbstractTaskManager {
  constructor() {
    super();
    this.tasks = [];
  }

  addTask(description) {
    if (!description) {
      throw new Error('Please provide a task description.');
    }

    const newTask = new Task(description);
    this.tasks.push(newTask);
  }
}
