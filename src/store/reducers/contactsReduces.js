const initialState = {
  contacts: []
};

const ADD_CONTACT = 'ADD_CONTACT';
const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const contactsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case REMOVE_CONTACT:
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) }

    default:
      return state;
  }
};

export const addContactAction = (payload) => ({ type: ADD_CONTACT, payload });
export const removeContactAction = (payload) => ({ type: REMOVE_CONTACT, payload });
