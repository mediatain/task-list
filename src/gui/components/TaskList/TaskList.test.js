import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';
import EmptyListMotivator from './EmptyListMotivator';
import TaskItem from '../TaskItem/TaskItem';

jest.mock('../TaskItem/TaskItem', () => jest.fn().mockReturnValue('TaskItem'));

describe('TaskList', () => {
  const cases = [
    [[]],
    [[{ id: 'Task 1' }]],
    [[{ id: 'Task 1' }, { id: 'Task 2' }, { id: 'Task 3' }]],
  ];

  it.each(cases)('should match the snapshot for tasks %p', (tasks) => {
    const { container } = render(<TaskList tasks={tasks} />);

    expect(container).toMatchSnapshot();
  });

  it.each(cases)('should render one TaskItem for each task', (tasks) => {
    const taskList = shallow(<TaskList tasks={tasks} />);

    expect(taskList.find(TaskItem).length).toEqual(tasks.length);
  });

  it('should render an EmptyListMotivator if tasks are empty', () => {
    const taskList = shallow(<TaskList tasks={[]} />);

    expect(taskList.exists(EmptyListMotivator)).toBe(true);
  });

  it('should render an EmptyListMotivator if tasks are undefined', () => {
    const taskList = shallow(<TaskList />);

    expect(taskList.exists(EmptyListMotivator)).toBe(true);
  });

  it('should not render an EmptyListMotivator if there are tasks', () => {
    const taskList = shallow(<TaskList tasks={[{ id: 'Task 1' }, { id: 'Task 2' }]} />);

    expect(taskList.exists(EmptyListMotivator)).toBe(false);
  });

  describe('when the TaskItem gets checked', () => {
    it('should call the passed onToggleTask function with the task id', () => {
      const onToggleTask = jest.fn();
      const taskId = 'Task 1';
      const taskList = shallow(<TaskList tasks={[{ id: taskId }]} onToggleTask={onToggleTask} />);

      taskList.find(TaskItem).simulate('check');

      expect(onToggleTask).toBeCalledWith(taskId);
    });
  });
});

