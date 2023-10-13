import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentSettings from './PaymentSettings';

describe('<PaymentSettings />', () => {
  test('it should mount', () => {
    render(<PaymentSettings />);
    
    const paymentSettings = screen.getByTestId('PaymentSettings');

    expect(paymentSettings).toBeInTheDocument();
  });
});