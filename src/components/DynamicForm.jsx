import React from 'react';
import { useForm, watch } from 'react-hook-form';
import styles from './DynamicForm.module.css';
const DynamicForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const firstName = watch('firstName', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label>First Name</label>
        <input
          {...register('firstName', { required: true, minLength: 3 })}
        />
        {errors.firstName && <span>This field is required and should have at least 3 characters</span>}
      </div>

      {firstName.length >= 3 && (
        <div className={styles.formGroup}>
          <label>Second Field</label>
          <input {...register('secondField', { required: true })} />
          {errors.secondField && <span>This field is required</span>}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
