import React, { useReducer } from 'react';

const reducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};

const useForm = initialState => {
  const [formState, setFormState] = useReducer(reducer, initialState);

  const onChange = event => {
    const { name, value } = event.target;
    setFormState({ [name]: value });
  };

  return { formState, setFormState, onChange };
};

export { useForm };
