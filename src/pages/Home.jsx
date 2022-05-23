import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home__main-title'>
        <h1>Contact list</h1>
      </div>
      <div className='home__links'>
        <NavLink to='/contacts'>Contacts</NavLink>
        <NavLink to='/about'>About project</NavLink>
      </div>
    </div>
  );
};
