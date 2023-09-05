import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomer } from './customerApi';

const initialState = {
  loaded: false,
  loading: false,
  customer: null,
};
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCustomer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.customer = action.payload;
      })
      .addCase(fetchCustomer.rejected, (state, action) => {
        console.log('action: ', action);
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default customerSlice;

export const customerSelector = (state) => state.customer.customer;
export const loadedCustomerSelector = (state) => state.customer.loaded;
export const loadingCustomerSelector = (state) => state.customer.loading;
