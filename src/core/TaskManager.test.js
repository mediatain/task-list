import TaskManager from './TaskManager';
import uuid from 'uuid/v4';
import Task from './Task';

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

    it('should call all listener functions with the updated task list', () => {
      const listeners = {
        first: jest.fn(),
        second: jest.fn(),
        third: jest.fn(),
      };
      taskManager.listeners = listeners;

      taskManager.addTask('Buy milk');

      Object.values(listeners).forEach(listener => {
        expect(listener).toHaveBeenCalledWith(taskManager.tasks);
      });
    });
  });

  describe('toggleTask', () => {
    describe('when task exists', () => {
      const task = new Task('Buy milk');

      beforeEach(() => {
        taskManager.tasks = [task];
      });

      it.each([
        [true, false],
        [false, true],
      ])('should toggle to %s when done was %s', (expectedValue, initialValue) => {
        task.done = initialValue;

        taskManager.toggleTask(task.id);

        expect(task.done).toBe(expectedValue);
      });

      it('should call all listener functions with the updated task list', () => {
        const listeners = {
          first: jest.fn(),
          second: jest.fn(),
          third: jest.fn(),
        };
        taskManager.listeners = listeners;

        taskManager.toggleTask(task.id);

        Object.values(listeners).forEach(listener => {
          expect(listener).toHaveBeenCalledWith(taskManager.tasks);
        });
      });
    });

    describe('when task does not exists', () => {
      const idOfNonExistingTask = 'id-of-non-existing-task';

      it('should throw an error', () => {
        expect(() => {
          taskManager.toggleTask(idOfNonExistingTask);
        }).toThrowError(`A task with the id "${idOfNonExistingTask}" does not exist.`);
      });

      it('should not call the listener functions', () => {
        const listeners = {
          first: jest.fn(),
          second: jest.fn(),
          third: jest.fn(),
        };
        taskManager.listeners = listeners;

        try {
          taskManager.toggleTask(idOfNonExistingTask);
        } catch {}

        Object.values(listeners).forEach(listener => {
          expect(listener).not.toHaveBeenCalled();
        });
      });
    });

  });

  describe('onUpdate', () => {
    it('should store the passed listener function with a uuid', () => {
      const uuidMock = '0f3da3e2-c618-48bc-bae1-b45fe2406b93';
      uuid.mockReturnValueOnce(uuidMock);
      const listener = jest.fn();

      taskManager.onUpdate(listener);

      expect(taskManager.listeners).toMatchObject({ [uuidMock]: listener });
    });

    it('should call the passed listener function', () => {
      const listener = jest.fn();

      taskManager.onUpdate(listener);

      expect(listener).toHaveBeenCalledWith(taskManager.tasks);
    });

    it('should return a function that removes the listener', () => {
      const uuidMock = '0f3da3e2-c618-48bc-bae1-b45fe2406b93';
      uuid.mockReturnValueOnce(uuidMock);
      const listener = jest.fn();

      const stopListening = taskManager.onUpdate(listener);
      stopListening();

      expect(taskManager.listeners).not.toMatchObject({ [uuidMock]: listener });
    });
  });
});
