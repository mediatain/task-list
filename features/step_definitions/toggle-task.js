import { Given, When, Then } from 'cucumber';

Given(/^John has toggled the task "([^"]*)"$/, function (taskDescription) {
  const task = this.taskManager.tasks.find(item => item.description === taskDescription);
  this.taskManager.toggleTask(task.id);
});

When(/^John toggles the task "([^"]*)"$/, function (taskDescription) {
  const task = this.taskManager.tasks.find(item => item.description === taskDescription);
  this.taskManager.toggleTask(task.id);
});

Then(/^John's list should show a task "([^"]*)" as (.*?)$/, function (taskDescription, doneOrUndone) {
  const done = doneOrUndone === 'done';

  return new Promise((resolve, reject) => {
    const stopListening = this.taskManager.onUpdate(tasks => {
      const tasksWithDescription = tasks.filter((task) => task.description === taskDescription);

      if (!tasksWithDescription.find(task => task.done === done)) {
        reject(`Task "${taskDescription}" not found as ${doneOrUndone} in task list`);
        return;
      }

      resolve();
    });
    stopListening();
  });
});
