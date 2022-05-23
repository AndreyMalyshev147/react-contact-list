import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { changeUserInputsAction, clearUserInputsAction } from '../store/reducers/formsReducer';

export const EditContact = ({ contact }) => {
  const [input, setInput] = useState(contact);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const editContact = (userInput) => {
    if (userInput) {
      const addNewInfo = {
        name: userInput.name,
        surname: userInput.surname,
        phone: userInput.phone,
        email: userInput.email
      };

      setInput(Object.assign(contact, addNewInfo));
      dispatch(changeUserInputsAction(contact));
      dispatch(clearUserInputsAction());
    }
  };

  const editSubmit = (event) => {
    event.preventDefault();
    editContact(input);
    navigate(`/react-contact-list/contacts/${input.id}`, { replace: true });
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  };

  const addNewInfoOnClick = (event) => {
    editSubmit(event);
  };

  return (
    <form className='form' onSubmit={event => event.preventDefault()}>
      <div className='form__title'>
        <span>EDIT CONTACT</span>
      </div>
      <label className='form__label'>
        <span>Name</span>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Input your name...'
          value={input.name}
          onChange={handleChange}
        />
      </label>
      <label className='form__label'>
        <span>Surname</span>
        <input
          type='text'
          name='surname'
          id='surname'
          placeholder='Input your surname...'
          value={input.surname}
          onChange={handleChange}
        />
      </label>
      <label className='form__label'>
        <span>Phone</span>
        <input
          type='tel'
          name='phone'
          id='phone'
          placeholder='Input your phone...'
          value={input.phone}
          onChange={handleChange}
        />
      </label>
      <label className='form__label'>
        <span>Email</span>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Input your email...'
          value={input.email}
          onChange={handleChange}
        />
      </label>
      <div className='form__btn'>
        <button onClick={addNewInfoOnClick}>Save</button>
      </div>
    </form>
  );
};
