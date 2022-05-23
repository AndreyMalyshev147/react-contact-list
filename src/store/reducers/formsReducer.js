const initialState = {
  inputs: {
    name: '',
    surname: '',
    phone: '',
    email: '',
  }
};

const CHANGE_USER_INPUTS = 'CHANGE_USER_INPUTS';
const EDIT_USER_INPUTS = 'EDIT_USER_INPUTS';
const CLEAR_USER_INPUTS = 'CLEAR_USER_INPUTS';

export const formsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_USER_INPUTS:
      return { ...state, inputs: action.payload };

    case EDIT_USER_INPUTS:
      return { ...state, inputs: action.payload };

    case CLEAR_USER_INPUTS:
      return { ...state, inputs: action.payload }

    default:
      return state;
  }
};

export const changeUserInputsAction = (payload) => ({ type: CHANGE_USER_INPUTS, payload });
export const editUserInputsAction = (payload) => ({ type: EDIT_USER_INPUTS, payload });
export const clearUserInputsAction = (payload) => ({ type: CLEAR_USER_INPUTS, payload: { name: '', surname: '', phone: '', email: '' } });
