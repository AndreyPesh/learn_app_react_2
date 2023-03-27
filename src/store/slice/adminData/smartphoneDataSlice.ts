import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SmartphoneDescription } from '../../../types/interface';

interface EventFormSmartphone {
  name: string;
  value: string;
  type: string;
  checked: boolean;
}

const initialState: SmartphoneDescription = {
  model: '',
  display: '',
  brand: '',
  price: '0',
  year: '2020',
  cpu: '',
  frequency: '4000',
  memory: '2000',
  nfc: false,
  images: [],
};

export const smartphoneDataSlice = createSlice({
  name: 'smartphoneData',
  initialState,
  reducers: {
    addDataSmartphone: (
      state: SmartphoneDescription,
      action: PayloadAction<EventFormSmartphone>
    ) => {
      const { name, value, type, checked } = action.payload;
      return { ...state, [name]: type === 'checkbox' ? checked : value };
    },
    addBrandSmartphone: (state: SmartphoneDescription, action: PayloadAction<string>) => {
      state.brand = action.payload;
      return state;
    },
  },
});

export const { addDataSmartphone, addBrandSmartphone } = smartphoneDataSlice.actions;

export default smartphoneDataSlice.reducer;
