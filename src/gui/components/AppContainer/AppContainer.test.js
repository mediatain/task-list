import React from 'react';
import 'jest-styled-components';
import AppContainer from './AppContainer';
import { render } from '@testing-library/react';
import TaskForm from '../TaskForm/TaskForm';
import { shallow } from 'enzyme';
import TaskList from '../TaskList/TaskList';

jest.mock('../TaskForm/TaskForm', () => jest.fn().mockReturnValue('TaskForm'));
jest.mock('../TaskList/TaskList', () => jest.fn().mockReturnValue('TaskList'));

describe('AppContainer', () => {
  it('should match the snapshot', () => {
    const { container } = render(<AppContainer />);

    expect(container).toMatchSnapshot();
  });

  it('should pass onAddTask to TaskForm', () => {
    const onAddTask = jest.fn();

    const appContainer = shallow(<AppContainer onAddTask={onAddTask} />);

    const taskForm = appContainer.find(TaskForm);
    expect(taskForm.prop('onAddTask')).toBe(onAddTask);
  });

  it('should pass tasks to TaskList', () => {
    const tasks = ['Task 1', 'Task 2'];

    const appContainer = shallow(<AppContainer tasks={tasks} />);

    const taskForm = appContainer.find(TaskList);
    expect(taskForm.prop('tasks')).toBe(tasks);
  });

  it('should pass onToggleTask to TaskList', () => {
    const onToggleTask = jest.fn();

    const appContainer = shallow(<AppContainer onToggleTask={onToggleTask} />);

    const taskForm = appContainer.find(TaskList);
    expect(taskForm.prop('onToggleTask')).toBe(onToggleTask);
  });
});

