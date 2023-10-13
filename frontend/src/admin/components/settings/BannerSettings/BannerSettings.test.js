import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BannerSettings from './BannerSettings';

describe('<BannerSettings />', () => {
  test('it should mount', () => {
    render(<BannerSettings />);
    
    const bannerSettings = screen.getByTestId('BannerSettings');

    expect(bannerSettings).toBeInTheDocument();
  });
});