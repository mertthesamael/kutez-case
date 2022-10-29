import { render, screen } from '@testing-library/react';
import Input from './Input';

test('should set placeholder as given props', () => {
  render(<Input placeholder='test' />);
  const linkElement = screen.getByText('test');
  expect(linkElement).toBeInTheDocument();
});   


test('should render input with given type', () => {
    render(<Input type='number' />);
    const linkElement = screen.getByTestId('number-input');
    expect(linkElement).toBeInTheDocument();
  }); 


 


