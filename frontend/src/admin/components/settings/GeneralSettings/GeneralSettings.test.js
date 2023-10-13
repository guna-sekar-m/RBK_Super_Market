import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GeneralSettings from './GeneralSettings';

describe('<GeneralSettings />', () => {
  test('it should mount', () => {
    render(<GeneralSettings />);
    
    const generalSettings = screen.getByTestId('GeneralSettings');

    expect(generalSettings).toBeInTheDocument();
  });
});