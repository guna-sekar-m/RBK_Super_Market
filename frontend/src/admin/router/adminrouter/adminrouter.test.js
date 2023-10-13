import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Adminrouter from './adminrouter';

describe('<Adminrouter />', () => {
  test('it should mount', () => {
    render(<Adminrouter />);
    
    const adminrouter = screen.getByTestId('Adminrouter');

    expect(adminrouter).toBeInTheDocument();
  });
});