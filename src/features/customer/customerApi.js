import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomer = createAsyncThunk('customer/fetchCustomer', async ({ companyId, partnerId }) => {
  const response = await fetch(
    `https://erp.scigroup.com.vn/api/connect-customer-persona/get-partner?company_id=${companyId}&partner_id=${partnerId}`,
  );
  return await response.json();
});
