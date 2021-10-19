import React from 'react';
import { useForm } from 'react-hook-form';
import('./Appoinment.css')

const Appoinment = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="mt-4 mb-3 container">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter your name" className="mb-3" {...register("firstName", { required: true })} />

      {errors.firstName?.type === 'required' && "First name is required"}
      <br />
      <input placeholder="Address" {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <br />
      <input  className="mt-3" type="submit" />
    </form>
        </div>
    );
};

export default Appoinment;