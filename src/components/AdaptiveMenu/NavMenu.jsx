import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closeMenuAction } from '../../store/reducers/navMenuReducer';

export const NavMenu = () => {
  const status = useSelector(state => state.status.status);

  const dispatch = useDispatch();

  const closeMenu = (status) => {
    dispatch(closeMenuAction(status));
  };

  return (
    <div onClick={() => closeMenu(status)} className={`nav-menu__background ${status}`} >
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`nav-menu__sidebar ${status}`}
      >
        <div className='nav-menu__link'>
          <NavLink to='/react-contact-list/'>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 15 L 14 15 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"/>
            </svg>
            <span>
              Home
            </span>
          </NavLink>
          <NavLink to='/react-contact-list/contacts'>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M18,2H6C4.895,2,4,2.895,4,4v16c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V4C20,2.895,19.105,2,18,2z M12,6 c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S10.3,6,12,6z M17,18H7c0,0,0-0.585,0-1c0-1.571,2.512-3,5-3s5,1.429,5,3 C17,17.415,17,18,17,18z"/>
            </svg>
            <span>
              Contacts
            </span>
          </NavLink>
          <NavLink to='/react-contact-list/about'>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"/>
            </svg>
            <span>
              About
            </span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
