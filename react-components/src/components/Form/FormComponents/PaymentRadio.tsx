import { useFormContext } from 'react-hook-form';

function PaymentRadio() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="form__payment">
        <label htmlFor="cash">
          <input
            value="cash"
            id="cash"
            type="radio"
            {...register('paymentType', { required: true })}
          />
          Cash
        </label>
        <label htmlFor="card">
          <input
            value="card"
            id="card"
            type="radio"
            {...register('paymentType', { required: true })}
          />
          Card
        </label>
      </div>
      {errors.paymentType && <span className="form__error">Payment type should be selected!</span>}
    </div>
  );
}

export default PaymentRadio;
