import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { changeUserInputsAction, clearUserInputsAction } from '../store/reducers/formsReducer';
import { addContactAction } from '../store/reducers/contactsReduces';

export const NewContact = () => {
  const inputs = useSelector(state => state.inputs.inputs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewContact = (inputs) => {
    if (inputs.name) {
      const newContact = {
        id: +new Date(),
        name: inputs.name,
        surname: inputs.surname,
        phone: inputs.phone,
        email: inputs.email
      };

      dispatch(addContactAction(newContact));
      navigate('/contacts', { replace: true });
    }

    return;
  };

  const handleChange = (event) => {
    dispatch(changeUserInputsAction({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewContact(inputs);
    dispatch(clearUserInputsAction());
  };

  const addContactOnClick = (event) => {
    handleSubmit(event);
  };

  return (
    <form className='form' onSubmit={event => event.preventDefault()}>
      <div className='form__title'>
        <span>NEW CONTACT</span>
      </div>
      <label className='form__label'>
        <span>Name</span>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Input your name...'
          value={inputs.name}
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
          value={inputs.surname}
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
          value={inputs.phone}
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
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <div className='form__btn'>
        <button onClick={addContactOnClick}>Save</button>
      </div>
    </form>
  );
};
