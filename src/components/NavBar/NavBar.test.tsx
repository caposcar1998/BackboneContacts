import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders contact us button', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});