import { Dispatch, SetStateAction } from 'react';

export type SetStateBooleanAction = Dispatch<SetStateAction<boolean>>;

export type ConfirmHandler = () => void;
