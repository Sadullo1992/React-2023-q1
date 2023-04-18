import { useFormContext } from 'react-hook-form';

function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor="firstname">
      Name
      <input
        type="text"
        placeholder="Enter your name"
        {...register('name', { required: true, pattern: /^[A-Z].*$/, minLength: 3 })}
      />
      {errors.name?.type === 'required' && <span className="form__error">Name is required!</span>}
      {errors.name?.type === 'pattern' && (
        <span className="form__error">Name should start with capital letter!</span>
      )}
      {errors.name?.type === 'minLength' && <span className="form__error">At least 3 letter</span>}
    </label>
  );
}

export default NameInput;
