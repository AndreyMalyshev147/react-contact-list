const initialState = {
  status: 'passive'
};

const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

export const navMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, status: action.payload };

    case CLOSE_MENU:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export const openMenuAction = (payload) => ({ type: OPEN_MENU, payload: 'active' });
export const closeMenuAction = (payload) => ({ type: OPEN_MENU, payload: 'passive' });
