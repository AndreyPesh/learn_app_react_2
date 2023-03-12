import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isShow: boolean;
  message: string;
  status: boolean
}

const initialState: ModalState = { isShow: false, message: '', status: false };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, actions: PayloadAction<Pick<ModalState, 'message'>>) => ({ isShow: true, message: actions.payload.message, status: false }),
    closeModal: (state, actions: PayloadAction<Pick<ModalState, 'status'>>) => ({ isShow: false, message: '', status: actions.payload.status }),
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
