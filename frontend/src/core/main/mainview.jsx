import React from 'react';
import './main.css';
import { Outlet } from 'react-router-dom';

const MainView = () => (
  <main className='mt-3'>
    <Outlet/>
  </main>
);

export default MainView;