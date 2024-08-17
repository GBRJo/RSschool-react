import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
};

export const HookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name:
            <input type="text" {...register('name', { required: true })} />
            {errors.name && <span>Name is required</span>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" {...register('email', { required: true })} />
            {errors.email && <span>Email is required</span>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
