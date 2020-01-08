import assert from 'assert';
import { Given, When, Then } from 'cucumber';

Given(/^John has added the task "(.*?)"$/, function (taskDescription) {
  this.taskManager.addTask(taskDescription);
});

When(/^John adds the task "(.*?)"$/, function (taskDescription) {
  if (taskDescription === null) {
    taskDescription = '';
  }

  try {
    this.taskManager.addTask(taskDescription);
  } catch (error) {
    this.receivedError = error;
  }
});

Then(/^John's list should show the task "(.*?)"$/, function (taskDescription) {
  return new Promise((resolve, reject) => {
    const stopListening = this.taskManager.onUpdate(tasks => {
      const task = tasks.find(({ description }) => description === taskDescription);

      if (task === undefined) {
        reject(`Task "${taskDescription}" not found in task list`);
        return;
      }

      resolve();
    });
    stopListening();
  });
});

Then(/^John should see that adding the task is not possible$/, function () {
  assert(this.receivedError instanceof Error);
});

Then(/^John should see that he has to provide a description$/, function () {
  assert.equal(this.receivedError.message, 'Please provide a task description.');
});
