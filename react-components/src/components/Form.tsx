import { Component, createRef, FormEvent } from 'react';
import Validation from '../utils/validation';
import Confirmation from './Confirmation';

export interface IFormData {
  name?: string;
  country?: string;
  date?: string;
  file?: string;
  paymentType?: string;
  agree?: boolean;
}

type FormProps = {
  setOrders: (order: IFormData) => void;
};

type FormState = {
  isValidName: boolean;
  isValidCountry: boolean;
  isValidDate: boolean;
  isValidFile: boolean;
  isValidPaymetType: boolean;
  isValidAgree: boolean;
  isShowConfirm: boolean;
};

class Form extends Component<FormProps, FormState> {
  validation = new Validation();

  nameRef = createRef<HTMLInputElement>();

  countryRef = createRef<HTMLSelectElement>();

  dateRef = createRef<HTMLInputElement>();

  fileRef = createRef<HTMLInputElement>();

  cashTypeRef = createRef<HTMLInputElement>();

  cardTypeRef = createRef<HTMLInputElement>();

  agreeRef = createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValidName: true,
      isValidCountry: true,
      isValidDate: true,
      isValidFile: true,
      isValidPaymetType: true,
      isValidAgree: true,
      isShowConfirm: false,
    };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data: IFormData = {
      name: this.nameRef.current?.value,
      country: this.countryRef.current?.value,
      date: this.dateRef.current?.value,
      file: this.fileRef.current?.value,
      paymentType: this.cashTypeRef.current?.checked ? 'cash' : 'card',
      agree: this.agreeRef.current?.checked,
    };

    const isValid = this.validate(data);
    if (isValid) {
      this.setState({ isShowConfirm: true });

      this.props.setOrders({
        ...data,
        file: URL.createObjectURL(this.fileRef.current?.files?.[0] as unknown as Blob),
      });

      setTimeout(() => {
        this.setState({ isShowConfirm: false });
        form.reset();
      }, 2000);
    }
  };

  validate(data: IFormData): boolean {
    const isValidName = this.validation.nameValidate(data.name);
    const isValidCountry = this.validation.countryValidate(data.country);
    const isValidDate = this.validation.dateValidate(data.date);
    const isValidFile = this.validation.hasValueValidate(data.file);
    const isValidPaymetType = this.validation.paymentTypeValidate(
      this.cashTypeRef.current?.checked,
      this.cardTypeRef.current?.checked
    );
    const isValidAgree = !!data.agree;

    this.setState({
      isValidName,
      isValidCountry,
      isValidDate,
      isValidFile,
      isValidPaymetType,
      isValidAgree,
    });

    const isValid =
      isValidName &&
      isValidCountry &&
      isValidDate &&
      isValidFile &&
      isValidPaymetType &&
      isValidAgree;

    return isValid;
  }

  render() {
    const {
      isValidName,
      isValidCountry,
      isValidDate,
      isValidFile,
      isValidPaymetType,
      isValidAgree,
      isShowConfirm,
    } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="firstname">
          Name
          <input type="text" name="firstname" placeholder="Enter your name" ref={this.nameRef} />
          {!isValidName && (
            <span className="form__error">Name is required and starts with capital letter!</span>
          )}
        </label>
        <label htmlFor="country">
          Delivery Address
          <select name="country" defaultValue="select-country" ref={this.countryRef}>
            <option disabled value="select-country">
              Select country
            </option>
            <option value="russia">Russia</option>
            <option value="belarus">Belarus</option>
            <option value="ukraine">Ukraine</option>
            <option value="uzbekistan">Uzbekistan</option>
          </select>
          {!isValidCountry && <span className="form__error">Select your country!</span>}
        </label>
        <label htmlFor="date">
          Delivery date
          <input type="date" name="date" ref={this.dateRef} />
          {!isValidDate && (
            <span className="form__error">
              The delivery date that is invalid, will start from tomorrow
            </span>
          )}
        </label>
        <label htmlFor="file">
          Profile image
          <input
            type="file"
            name="file"
            accept="image/jpg, image/jpeg, image/png"
            ref={this.fileRef}
          />
          {!isValidFile && <span className="form__error">Please, Upload your image</span>}
        </label>
        <div>
          <div className="form__payment">
            <label htmlFor="cash">
              <input value="cash" id="cash" type="radio" name="payment" ref={this.cashTypeRef} />
              Cash
            </label>
            <label htmlFor="card">
              <input value="card" id="card" type="radio" name="payment" ref={this.cardTypeRef} />
              Card
            </label>
          </div>
          {!isValidPaymetType && (
            <span className="form__error">Payment type should be selected!</span>
          )}
        </div>
        <label htmlFor="agree">
          <input type="checkbox" name="agree" ref={this.agreeRef} />I agree to the terms of purchase{' '}
          <br />
          {!isValidAgree && <span className="form__error">Please, check agreement</span>}
        </label>
        <button type="submit" className="btn btn--primary">
          <span className="btn__text">Submit</span>
        </button>
        {isShowConfirm && <Confirmation />}
      </form>
    );
  }
}

export default Form;
