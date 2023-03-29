import { Dispatch, SetStateAction } from 'react';
import { SmartphoneDescription } from './interface';

export type SetStateBooleanAction = Dispatch<SetStateAction<boolean>>;

export type ConfirmHandler = () => void;

export type SmartphoneDataState = Omit<SmartphoneDescription, 'images'>;
