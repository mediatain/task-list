import React from 'react';
import TaskManager from './core';
import { mount } from 'enzyme';
import App from './App';
import AppContainer from './gui/components/AppContainer/AppContainer';

jest.mock('./core');

function mockCore({
  tasks = [],
  addTask = jest.fn(),
  toggleTask = jest.fn()
}) {
  TaskManager.mockImplementation(() => ({
    addTask,
    toggleTask,
    onUpdate: (callback) => { callback(tasks); }
  }));
}

describe('App', () => {
  it('should pass the tasks from the core to the AppContainer', () => {
    const tasks = [
      { id: '2354joukhlsa7', description: 'make coffee', done: false },
      { id: 'as4575iuhky28', description: 'buy milk', done: true }
    ];
    mockCore({ tasks });

    const app = mount(<App />);

    expect(app.find(AppContainer).prop('tasks')).toEqual(tasks);
  });

  it('should call the addTask function when the onAddTask function is called', () => {
    const addTask = jest.fn();
    mockCore({ addTask });
    const app = mount(<App />);
    const onAddTask = app.find(AppContainer).prop('onAddTask');

    onAddTask();

    expect(addTask).toHaveBeenCalled();
  });

  it('should call the toggleTask function when the onToggleTask function is called', () => {
    const toggleTask = jest.fn();
    mockCore({ toggleTask });
    const app = mount(<App />);
    const onCheckTask = app.find(AppContainer).prop('onToggleTask');

    onCheckTask();

    expect(toggleTask).toHaveBeenCalled();
  });
});
