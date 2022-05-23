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
          <Route exact path='react-contact-list/' element={<Home />} />
          <Route path='react-contact-list/contacts' element={<Contacts />} />
          <Route path='react-contact-list/new-contact' element={<NewContact />} />
          <Route path='react-contact-list/about' element={<About />} />
        </Routes>

        {contacts.map(contact => (
          <React.Fragment key={contact.id}>
            <Routes>
              <Route path={`react-contact-list/contacts/${contact.id}`} element={<ContactInfo contact={contact} />} />
            </Routes>
            <Routes>
              <Route path={`react-contact-list/edit-contact/${contact.id}`} element={<EditContact contact={contact} />} />
            </Routes>
          </React.Fragment>
        ))}

      </div>
  );
}

export default App;
