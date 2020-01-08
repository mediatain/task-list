export default class AbstractTaskManager {
  /**
   * Add the task to the task list
   *
   * @param {string} description The description of the new task
   * @throws new Error('Please provide a task description.') if the function
   *         has been called with an empty description param
   */
  addTask(description) {
    throw new Error('not implemented');
  }

  /**
   * Toggle a task. The task is identified by its id. If the task is marked
   * as undone, toggling makes it done. If the task is marked as done,
   * toggling makes it undone.
   *
   * @param {string} taskId The id of the task to be toggled
   */
  toggleTask(taskId) {
    throw new Error('not implemented');
  }

  /**
   * This registers a listener on the TaskManager. The new listener should be
   * called immediately with the current task list. All listeners should be
   * called with the current task list as soon a new task is added or an
   * existing task is marked as done.
   * 
   * A task list is an array of task objects. Task objects should have these
   * properties:
   * {string}  task.id            Unique ID of that task
   * {string}  task.description   Entered by the user on creation
   * {boolean} task.done          True if the task is done, false otherwise
   *
   * @param {function} listener that is called with the current task list
   * @return {function} function to detach the listener
   */
  onUpdate(listener) {
    throw new Error('not implemented');
  }
}
