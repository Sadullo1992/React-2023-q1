import { useFormContext } from 'react-hook-form';

const isFutureDate = (date: string) => {
  const currentDate = new Date();
  const deliveryDate = new Date(date);

  return deliveryDate.getTime() > currentDate.getTime();
};

function DateInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor="date">
      Delivery date
      <input
        type="date"
        data-testid="date-input"
        {...register('date', { required: true, validate: (value) => isFutureDate(value) })}
        data-cy="date-input"
      />
      {errors.date?.type === 'required' && (
        <span className="form__error">The delivery date is required!</span>
      )}
      {errors.date?.type === 'validate' && (
        <span className="form__error">The delivery starts from tomorrow!</span>
      )}
    </label>
  );
}

export default DateInput;
