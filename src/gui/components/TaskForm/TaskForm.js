import React, { useRef, useState } from 'react';
import FormError from './FormError';
import CancelButton from './CancelButton';
import SubmitButton from './SubmitButton';
import ButtonsContainer from './ButtonsContainer';
import Button from './Button';
import styled from 'styled-components';
import TextField from './TextField';
import InputContainer from './InputContainer';
import { cancelButtonLabel, newTaskButtonLabel, saveButtonLabel } from '../../strings';

const StyledTaskForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
  margin: auto;
  padding: 0;
`;

export default function TaskForm({ onAddTask }) {
  const textInputRef = useRef();
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();

  function resetForm() {
    setError();
    setOpen(false);
    setValue('');
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  }

  function onOpen() {
    setOpen(true);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    try {
      onAddTask(value);
      resetForm();
    } catch (e) {
      setError(e.message);
    }
  }

  function onChangeValue(e) {
    setValue(e.target.value);
    setError(undefined);
  }

  return (
    <StyledTaskForm onSubmit={onSubmit}>
      <Button onClick={onOpen} invisible={open}>{newTaskButtonLabel}</Button>
      <InputContainer visible={open}>
        <TextField
          ref={textInputRef}
          value={value}
          onChange={onChangeValue}
        />
        <ButtonsContainer>
          <CancelButton onClick={resetForm}>{cancelButtonLabel}</CancelButton>
          <SubmitButton>{saveButtonLabel}</SubmitButton>
        </ButtonsContainer>
      </InputContainer>
      {error && <FormError message={error} />}
    </StyledTaskForm>
  );
}
