import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SmartphoneDescription } from '../../../types/interface';
import { SmartphoneDataState } from '../../../types/types';

interface EventFormSmartphone {
  name: string;
  value: string;
  type: string;
  checked: boolean;
}

const initialState: SmartphoneDataState = {
  model: '',
  display: '',
  brand: '',
  price: '0',
  year: '2020',
  cpu: '',
  frequency: '4000',
  memory: '2000',
  nfc: false,
};

export const smartphoneDataSlice = createSlice({
  name: 'smartphoneData',
  initialState,
  reducers: {
    initDataSmartphone: (state: SmartphoneDataState, action: PayloadAction<SmartphoneDataState>) => {
      return {...state, ...action.payload}
    },
    addDataSmartphone: (
      state: SmartphoneDataState,
      action: PayloadAction<EventFormSmartphone>
    ) => {
      const { name, value, type, checked } = action.payload;
      return { ...state, [name]: type === 'checkbox' ? checked : value };
    },
    addBrandSmartphone: (state: SmartphoneDataState, action: PayloadAction<string>) => {
      state.brand = action.payload;
      return state;
    },
    resetDataSmartphone: (state: SmartphoneDataState) => (state = initialState),
  },
});

export const { initDataSmartphone, addDataSmartphone, addBrandSmartphone, resetDataSmartphone } = smartphoneDataSlice.actions;

export default smartphoneDataSlice.reducer;
