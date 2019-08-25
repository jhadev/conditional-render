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

  const mapInputs = state => {
    const stateArr = Object.entries(state);
    return () => {
      return stateArr.map(([key, value]) => {
        return (
          <input
            className={'form-control mb-2'}
            type={key}
            key={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            name={key}
            value={value}
            onChange={onChange}
          />
        );
      });
    };
  };

  return { formState, setFormState, onChange, mapInputs };
};

export { useForm };
