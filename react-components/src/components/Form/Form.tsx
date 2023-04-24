import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { addOrder } from '../../redux/formSlice';
import { useAppDispatch } from '../../redux/hooks';
import { IFormData } from '../../types/order.model';
import Confirmation from '../Confirmation';
import {
  AgreeCheckbox,
  CountrySelect,
  DateInput,
  FileInput,
  NameInput,
  PaymentRadio,
} from './FormComponents';

function Form() {
  const dispatch = useAppDispatch();
  const [isConfirm, setIsConfirm] = useState(false);
  const methods = useForm<IFormData>();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setIsConfirm(true);

    dispatch(
      addOrder({
        ...data,
        file: URL.createObjectURL(data.file?.[0] as unknown as Blob),
      })
    );

    reset();

    setTimeout(() => {
      setIsConfirm(false);
    }, 2000);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <NameInput />
        <CountrySelect />
        <DateInput />
        <FileInput />
        <PaymentRadio />
        <AgreeCheckbox />
        <button type="submit" className="btn btn--primary" data-cy="submit-btn">
          <span className="btn__text">Submit</span>
        </button>
        {isConfirm && <Confirmation />}
      </form>
    </FormProvider>
  );
}

export default Form;
