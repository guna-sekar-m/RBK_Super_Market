import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderStatus from './OrderStatus';

describe('<OrderStatus />', () => {
  test('it should mount', () => {
    render(<OrderStatus />);
    
    const orderStatus = screen.getByTestId('OrderStatus');

    expect(orderStatus).toBeInTheDocument();
  });
});