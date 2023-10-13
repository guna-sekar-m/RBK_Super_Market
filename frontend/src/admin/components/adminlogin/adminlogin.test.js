import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Adminlogin from './Adminlogin';

describe('<Adminlogin />', () => {
  test('it should mount', () => {
    render(<Adminlogin />);
    
    const adminlogin = screen.getByTestId('Adminlogin');

    expect(adminlogin).toBeInTheDocument();
  });
});