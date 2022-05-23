import { useDispatch, useSelector } from 'react-redux';

import { NavMenu } from '../AdaptiveMenu';
import { openMenuAction } from '../../store/reducers/navMenuReducer';
import { searchValueAction } from '../../store/reducers/searchReducer';

export const Navbar = () => {
  const status = useSelector(state => state.status.status);
  const searchValue = useSelector(state => state.searchValue.searchValue);

  const dispatch = useDispatch();

  const menuOpen = (status) => {
    dispatch(openMenuAction(status));
  };

  const handleChange = (event) => {
    dispatch(searchValueAction(event.target.value))
  };

  return (
    <header className='header'>
      <div className='header__menu-opener'>
        <button type='button' onClick={() => menuOpen(status)}>
          <svg focusable='false' viewBox='0 0 24 24' fill='#fff' width='24px' height='24px'>
            <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
          </svg>
        </button>
      </div>
      <div className='header__search'>
        <input
          type='text'
          placeholder='Search contacts...'
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      <NavMenu />
    </header>
  );
};
