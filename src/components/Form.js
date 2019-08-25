import React from 'react';
import { useForm } from '../hooks/useForm';

const Form = () => {
  const { formState, setFormState, onChange } = useForm({
    name: '',
    password: ''
  });

  const mapForm = Object.entries(formState);

  console.log(formState);

  return (
    <div className="form-group">
      {mapForm.map(([key, value]) => {
        return (
          <input
            className="form-control mb-2"
            key={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            name={key}
            type={key}
            value={value}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default Form;
