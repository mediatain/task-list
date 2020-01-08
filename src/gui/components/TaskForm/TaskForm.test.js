import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import TaskForm from './TaskForm';
import { shallow } from 'enzyme';
import Button from './Button';
import FormRow from './InputContainer';
import FormInput from './TextField';
import FormError from './FormError';
import { cancelButtonLabel } from '../../strings';

function submit(taskForm) {
  taskForm.simulate('submit', { preventDefault: jest.fn() });
}

function cancel(taskForm) {
  const cancelButton = taskForm.find({ children: cancelButtonLabel });
  cancelButton.simulate('click');
}

function changeText(taskForm, inputValue) {
  const formInput = taskForm.find(FormInput);
  const changeEvent = { target: { value: inputValue } };
  formInput.simulate('change', changeEvent);
}

describe('TaskForm', () => {
  it('should match the snapshot', () => {
    const { container } = render(<TaskForm onAddTask={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });

  it('should not show the input by default', () => {
    const taskForm = shallow(<TaskForm onAddTask={jest.fn()} />);

    const formRow = taskForm.find(FormRow);
    expect(formRow.prop('visible')).toBe(false);
  });

  it('should show the input when New Task Button is clicked', () => {
    const taskForm = shallow(<TaskForm onAddTask={jest.fn()} />);

    taskForm.find(Button).simulate('click');

    const formRow = taskForm.find(FormRow);
    expect(formRow.prop('visible')).toBe(true);
  });

  describe('when submitting', () => {
    it('should call the passed onAddTask function with entered text', () => {
      const onAddTask = jest.fn();
      const inputValue = 'My task';
      const taskForm = shallow(<TaskForm onAddTask={onAddTask} />);
      changeText(taskForm, inputValue);

      submit(taskForm);

      expect(onAddTask).toBeCalledWith(inputValue);
    });

    it('should clear the entered text', () => {
      const taskForm = shallow(<TaskForm onAddTask={jest.fn()} />);
      changeText(taskForm, 'My task');

      submit(taskForm);

      const formInput = taskForm.find(FormInput);
      expect(formInput.prop('value')).toBe('');
    });

    it('should close the input', () => {
      const taskForm = shallow(<TaskForm onAddTask={jest.fn()} />);
      changeText(taskForm, 'My task');

      submit(taskForm);

      const formRow = taskForm.find(FormRow);
      expect(formRow.prop('visible')).toBe(false);
    });

    describe('when onAddTask throws', () => {
      it('should show an error', () => {
        const onAddTask = jest.fn(() => {throw new Error('An error occurred.');});
        const taskForm = shallow(<TaskForm onAddTask={onAddTask} />);

        submit(taskForm);

        expect(taskForm.exists(FormError)).toBe(true);
      });

      it('should display the error message', () => {
        const errorMessage = 'An error occurred.';
        const onAddTask = jest.fn(() => {throw new Error(errorMessage);});
        const taskForm = shallow(<TaskForm onAddTask={onAddTask} />);

        submit(taskForm);

        const formError = taskForm.find(FormError).dive();
        expect(formError.contains(errorMessage)).toBe(true);
      });
    });
  });

  describe('when canceling', () => {
    it('should clear the entered text', () => {
      const taskForm = shallow(<TaskForm onAddTask={jest.fn()} />);
      changeText(taskForm, 'My task');

      cancel(taskForm);

      const formInput = taskForm.find(FormInput);
      expect(formInput.prop('value')).toBe('');
    });

    it('should close the input', () => {
      const taskForm = shallow(<TaskForm onAddTask={jest.fn()} />);
      changeText(taskForm, 'My task');

      cancel(taskForm);

      const formRow = taskForm.find(FormRow);
      expect(formRow.prop('visible')).toBe(false);
    });

    it('should hide an error message when there was one', () => {
      const onAddTask = jest.fn(() => {throw new Error('An error occurred.');});
      const taskForm = shallow(<TaskForm onAddTask={onAddTask} />);
      submit(taskForm);
      expect(taskForm.exists(FormError)).toBe(true);

      cancel(taskForm);

      expect(taskForm.exists(FormError)).toBe(false);
    });
  });

  describe('when typing', () => {
    it('should hide an error message when there was one', () => {
      const onAddTask = jest.fn(() => {throw new Error('An error occurred.');});
      const taskForm = shallow(<TaskForm onAddTask={onAddTask} />);
      submit(taskForm);
      expect(taskForm.exists(FormError)).toBe(true);

      changeText(taskForm);

      expect(taskForm.exists(FormError)).toBe(false);
    });
  });
});

