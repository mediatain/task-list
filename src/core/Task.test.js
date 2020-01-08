import Task from './Task';
import uuid from 'uuid/v4';

jest.mock('uuid/v4', () => jest.fn().mockReturnValue('uuidMock'));

describe('Task', () => {
  it('should hold a description that is the string passed in the constructor', () => {
    const description = 'Make coffee';

    const task = new Task(description);

    expect(task.description).toBe(description);
  });

  it('should hold a done flag that defaults to false', () => {
    const task = new Task('Make coffee');

    expect(task.done).toBe(false);
  });

  it('should hold an id that is created with uuid', () => {
    const uuidMock = '0f3da3e2-c618-48bc-bae1-b45fe2406b93';
    uuid.mockReturnValueOnce(uuidMock);

    const task = new Task('Make coffee');

    expect(task.id).toBe(uuidMock);
  });
});
