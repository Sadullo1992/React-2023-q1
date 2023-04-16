import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { IFormData, IOrder } from '../types/order.model';
import { RootState } from './store';

interface FormState {
  orders: IOrder[];
}

const initialState: FormState = {
  orders: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addOrder: {
      reducer(state, action: PayloadAction<IOrder>) {
        state.orders.push(action.payload);
      },
      prepare(formData: IFormData) {
        return {
          payload: {
            id: nanoid(),
            ...formData,
          },
        };
      },
    },
  },
});

export const { addOrder } = formSlice.actions;

export const selectOrders = (state: RootState) => state.form.orders;

export default formSlice.reducer;
