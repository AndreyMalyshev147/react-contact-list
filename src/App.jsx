import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { NewContact } from './pages/NewContact';
import { EditContact } from './pages/EditContact';
import { ContactInfo } from './pages/ContactInfo';
import { About } from './pages/About';

import './App.scss';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
      <div className='main-container'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='new-contact' element={<NewContact />} />
          <Route path='about' element={<About />} />
        </Routes>

        {contacts.map(contact => (
          <React.Fragment key={contact.id}>
            <Routes>
              <Route path={`contacts/${contact.id}`} element={<ContactInfo contact={contact} />} />
            </Routes>
            <Routes>
              <Route path={`edit-contact/${contact.id}`} element={<EditContact contact={contact} />} />
            </Routes>
          </React.Fragment>
        ))}

      </div>
  );
}

export default App;
