import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Confirmation from '../Confirmation';
import {
  AgreeCheckbox,
  CountrySelect,
  DateInput,
  FileInput,
  NameInput,
  PaymentRadio,
} from './FormComponents';

export interface IFormData {
  name: string;
  country: string;
  date: string;
  file: string;
  paymentType: string;
  agree: boolean;
}

type FormProps = {
  setOrders: (order: IFormData) => void;
};

function Form({ setOrders }: FormProps) {
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

    setOrders({
      ...data,
      file: URL.createObjectURL(data.file?.[0] as unknown as Blob),
    });

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
        <button type="submit" className="btn btn--primary">
          <span className="btn__text">Submit</span>
        </button>
        {isConfirm && <Confirmation />}
      </form>
    </FormProvider>
  );
}

export default Form;
