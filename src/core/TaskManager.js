import AbstractTaskManager from './AbstractTaskManager';
import Task from './Task';
import uuid from 'uuid/v4';

export default class TaskManager extends AbstractTaskManager {
  constructor() {
    super();
    this.tasks = [];
    this.listeners = {};
  }

  addTask(description) {
    if (!description) {
      throw new Error('Please provide a task description.');
    }

    const newTask = new Task(description);
    this.tasks.push(newTask);

    this.notifyListeners();
  }

  toggleTask(taskId) {
    const task = this.tasks.find(item => item.id === taskId);
    if (!task) {
      throw new Error(`A task with the id "${taskId}" does not exist.`);
    }
    task.done = !task.done;

    this.notifyListeners();
  }

  onUpdate(listener) {
    const listenerId = uuid();
    this.listeners[listenerId] = listener;

    listener([...this.tasks]);

    return () => {
      delete this.listeners[listenerId];
    };
  }

  notifyListeners() {
    Object.values(this.listeners).forEach(listener => {
      listener([...this.tasks]);
    });
  }
}
