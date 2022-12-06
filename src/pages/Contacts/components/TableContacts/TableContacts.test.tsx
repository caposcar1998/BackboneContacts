import React from 'react';
import { render, screen } from '@testing-library/react';
import TableContacts from './TableContacts';

test('renders contact us button', () => {
  render(<TableContacts />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});