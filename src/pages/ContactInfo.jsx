import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { removeContactAction } from '../store/reducers/contactsReduces';

export const ContactInfo = ({contact}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const removeContact = (contact) => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeContactAction(contact.id));
      navigate('/contacts', { replace: true });
    }

    return;
  };

  return (
    <div className='contact'>
      <NavLink to='/contacts'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 92 92"
        >
          <path d="M84 46c0 2.2-1.8 4-4 4H21.6l18.1 18.2c1.6 1.6 1.6 4.1 0 5.7-.7.7-1.7 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1 0-5.6l24.9-25c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L21.6 42H80c2.2 0 4 1.8 4 4z"/>
        </svg>
      </NavLink>
      <div className='contact__top contact__top--box'>
        <div className='contact__top contact__top--main-info'>
          <span>
            {contact.name.slice(0, 1)}
          </span>
          <span>{contact.name} {contact.surname}</span>
        </div>
        <div className='contact__top contact__top--actions'>
          <NavLink to={`/edit-contact/${contact.id}`} className='contact__top contact__top--actions edit'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 48 48"
            >
              <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/>
              <path fill="none" d="M0 0h48v48h-48z"/>
            </svg>
          </NavLink>
          <div onClick={() => removeContact(contact)} className='contact__top contact__top--actions delete'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 92 92"
              fill="#f00"
            >
              <path
                d="M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='contact__bottom contact__bottom--box'>
        <div className='contact__bottom contact__bottom--title'>
          <span>Contacs info</span>
        </div>
        <div className='contact__bottom contact__bottom--contact-info'>
          <span>
            <strong>email: </strong>
            <a
              href={`mailto:${contact.email.length === 0 ? 'empty' : contact.email}`}
              target='_blank'
            >
              {contact.email.length === 0 ? 'empty' : contact.email}
            </a>
          </span>
          <span>
            <strong>phone: </strong>
            <a
              href={`tel:${contact.phone.length === 0 ? 'empty' : contact.phone}`}
            >
              {contact.phone.length === 0 ? 'empty' : contact.phone}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
