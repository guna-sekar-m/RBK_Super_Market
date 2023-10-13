import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialLinkSettings from './SocialLinkSettings';

describe('<SocialLinkSettings />', () => {
  test('it should mount', () => {
    render(<SocialLinkSettings />);
    
    const socialLinkSettings = screen.getByTestId('SocialLinkSettings');

    expect(socialLinkSettings).toBeInTheDocument();
  });
});