import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import TaskItem from './TaskItem';
import Checkbox from './Checkbox';

describe('TaskItem', () => {
  const tasksMocks = [
    { id: '1', done: true, description: 'My first task' },
    { id: '2', done: false, description: 'My second task' },
    { id: '3', done: true, description: 'Aaand another task' },
  ];

  it.each(tasksMocks)('should match the snapshot for task %p', (task) => {
    const { container } = render(<TaskItem task={task} />);

    expect(container).toMatchSnapshot();
  });

  it.each(tasksMocks)('should render the task.description', (task) => {
    const taskItem = shallow(<TaskItem task={task} />);

    expect(taskItem.text()).toContain(task.description);
  });

  it.each([
    ['no checkmark', false],
    ['no checkmark', undefined],
    ['a checkmark', true],
  ])('should display %s when task done is %s', (display, done) => {
    const task = { id: '1', done, description: 'My first task' };

    const taskItem = shallow(<TaskItem task={task} />);

    const checkBox = taskItem.find(Checkbox).dive();
    const checkedMarkExists = checkBox.exists({'checked': true });
    expect(checkedMarkExists).toBe(display === 'a checkmark');
  });
});

