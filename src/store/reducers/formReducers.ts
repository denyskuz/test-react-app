import { SET_FORM_DATA, RESET_FORM_DATA } from '../actions/formActions';
import { FormValues } from 'types/form';

const initialState: FormValues = {
  variant: '',
  discount: '',
  comments: ''
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formReducer = (state = initialState, action: any): FormValues => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    case RESET_FORM_DATA:
      return initialState;
    default:
      return state;
  }
};
