import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginFormValues } from '../../types/interface';
import { NAME_STORAGE_LOGIN_FORM_DATA } from '../../utils/constants';
import { getStorageLoginFormData } from '../../utils/storage/localStorage';

const initialState: LoginFormValues = getStorageLoginFormData(NAME_STORAGE_LOGIN_FORM_DATA);

export const loginSlice = createSlice({
  name: 'login-form-data',
  initialState,
  reducers: {
    setCurrentFormData: (state, action: PayloadAction<LoginFormValues>) => (state = action.payload),
  },
});

export const { setCurrentFormData } = loginSlice.actions;

export default loginSlice.reducer;
