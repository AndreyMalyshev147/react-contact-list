import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const searchValue = useSelector(state => state.searchValue.searchValue);

  return (
    <div className='contacts'>
      {
        contacts.length === 0 ?
          <div className='contacts__empty-list'>
            <span>Your contact list is empty! Please click on "+" to create new contacts!</span>
          </div>
          :
          <div className='contacts__list'>
            {contacts.filter(contact => {
              return (
                contact
                  .name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||

                contact
                  .surname
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||

                contact
                  .phone
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||

                contact
                  .email
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );
            }).map(contact => (
              <NavLink to={`/react-contact-list/contacts/${contact.id}`} className='contacts__list-item' key={contact.id}>
                <div className='contacts__text contacts__text--photo'>
              <span>
                {contact.name.slice(0, 1)}
              </span>
                </div>
                <div className='contacts__text contacts__text--name'>
                  <span>{contact.name} {contact.surname}</span>
                </div>
                <div className='contacts__text contacts__text--email'>
                  <span>{contact.email}</span>
                </div>
                <div className='contacts__text contacts__text--phone'>
                  <span>{contact.phone}</span>
                </div>
              </NavLink>
            ))}
          </div>
      }
      <div className='contacts__btn'>
        <NavLink to='/react-contact-list/new-contact'>+</NavLink>
      </div>
    </div>
  );
};
