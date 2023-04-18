export interface IFormData {
  name: string;
  country: string;
  date: string;
  file: string;
  paymentType: string;
  agree: boolean;
}

export interface IOrder extends IFormData {
  id: string;
}
