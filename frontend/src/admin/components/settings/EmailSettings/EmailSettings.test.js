import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmailSettings from './EmailSettings';

describe('<EmailSettings />', () => {
  test('it should mount', () => {
    render(<EmailSettings />);
    
    const emailSettings = screen.getByTestId('EmailSettings');

    expect(emailSettings).toBeInTheDocument();
  });
});