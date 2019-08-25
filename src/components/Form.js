import React from 'react';
import { useForm } from '../hooks/useForm';
import Button from './Button';

const Form = props => {
  const { formState, setFormState, onChange, mapInputs } = useForm({
    name: ''
  });

  const displayInputs = mapInputs(formState);

  return (
    <div>
      <div className="form-group">{displayInputs()}</div>
      <Button
        color={'primary'}
        disabled={formState.name === ''}
        handleClick={() => {
          props.updateName(formState.name);
          setFormState({ name: '' });
        }}>
        Update Name
      </Button>
    </div>
  );
};

export default Form;
