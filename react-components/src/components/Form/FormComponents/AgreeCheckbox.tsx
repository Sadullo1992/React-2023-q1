import { useFormContext } from 'react-hook-form';

function AgreeCheckbox() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor="agree">
      <input type="checkbox" {...register('agree', { required: true })} />I agree to the terms of
      purchase <br />
      {errors.agree && <span className="form__error">Please, check agreement</span>}
    </label>
  );
}

export default AgreeCheckbox;
