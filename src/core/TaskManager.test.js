import TaskManager from './TaskManager';

describe('TaskManager', () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  describe('addTask', () => {
    it('should store a task with the passed description', () => {
      const taskDescription = 'Buy milk';

      taskManager.addTask(taskDescription);

      expect(taskManager.tasks).toContainEqual(
        expect.objectContaining({ description: taskDescription }),
      );
    });

    describe('when description is empty', () => {
      it('should throw an error', () => {
        expect(() => {
          taskManager.addTask('');
        }).toThrowError('Please provide a task description.');
      });

      it('should not store a task', () => {
        try {
          taskManager.addTask('');
        } catch {}

        expect(taskManager.tasks).not.toContainEqual(
          expect.objectContaining({ description: '' }),
        );
      });
    });
  });
});
