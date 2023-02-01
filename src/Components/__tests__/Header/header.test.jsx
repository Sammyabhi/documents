import { render, screen } from '@testing-library/react';
import Header from '../../app/Header/header';

test('renders learn react link', () => {
  render(<Header/>);
  const linkElement = screen.getByText(/1Ansah/i);
  expect(linkElement).toBeInTheDocument();
});                            