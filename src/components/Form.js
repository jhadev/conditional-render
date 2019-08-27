import React from 'react';
import { useForm } from '../hooks/useForm';
import Button from './Button';

const Form = props => {
  // extract and initialize useForm hook. don't need on change here, but might be useful at some point.
  const { formState, setFormState, onChange, mapInputs } = useForm({
    name: '',
    password: '',
    success: false
  });

  // if we don't want all of state to be made into input fields can do this.
  // state is preserved and we can call setFormState on the non input items in state normally.
  const filterInputsToDisplay = ({ name, password }) => ({ name, password });
  // return the closure to map inputs to the items in state asked for above.

  // define form options here -- need to either leave out dependency array or add empty objects to go in order

  // options are label, id, className, placeholder, type
  const displayInputs = mapInputs(filterInputsToDisplay(formState))([
    {
      label: 'test'
    },
    {
      label: 'crap'
    }
  ]);

  console.log(formState);

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="form-group">{displayInputs}</div>
        <Button
          color={'primary'}
          disabled={formState.name === ''}
          handleClick={() => {
            // example of sending form state back up to parent if necessary.
            props.updateName(formState.name);
            setFormState({ name: '', password: '' });
          }}>
          Update Name
        </Button>
      </div>
    </div>
  );
};

export default Form;
