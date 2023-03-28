/* eslint-disable class-methods-use-this */
class Validation {
  inputTextValidate = (inputTest: string | undefined): boolean => !!inputTest;

  nameValidate = (name: string | undefined): boolean => !!(name?.match(/^[A-Z].*$/) && !!name);

  countryValidate = (country: string | undefined): boolean => country !== 'select-country';

  dateValidate = (date: string | undefined): boolean => {
    if (date === undefined) return false;

    const currentDate = new Date();
    const deliveryDate = new Date(date);

    return deliveryDate.getTime() > currentDate.getTime();
  };

  hasValueValidate = (value: string | undefined): boolean => !!value;

  paymentTypeValidate = (cash: boolean | undefined, card: boolean | undefined): boolean =>
    !!cash || !!card;
}

export default Validation;
