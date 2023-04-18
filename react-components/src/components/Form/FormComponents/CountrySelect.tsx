import { useFormContext } from 'react-hook-form';

function CountrySelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor="country">
      Delivery Address
      <select
        defaultValue=""
        placeholder="select-country"
        {...register('country', { required: true })}
      >
        <option value="" disabled>
          Select country
        </option>
        <option value="russia">Russia</option>
        <option value="belarus">Belarus</option>
        <option value="ukraine">Ukraine</option>
        <option value="uzbekistan">Uzbekistan</option>
      </select>
      {errors.country && <span className="form__error">Select your country!</span>}
    </label>
  );
}

export default CountrySelect;
