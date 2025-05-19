import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import Input from '../Input';

describe('Input Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with label', () => {
    render(
      <Input
        label="Test Label"
        value=""
        onChange={mockOnChange}
      />
    );
    
    const input = screen.getByLabelText('Test Label');
    expect(input).toBeInTheDocument();
  });

  it('renders with default type text', () => {
    render(
      <Input
        label="Test Label"
        value=""
        onChange={mockOnChange}
      />
    );
    
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with custom type', () => {
    render(
      <Input
        label="Test Label"
        type="password"
        value=""
        onChange={mockOnChange}
      />
    );
    
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'password');
  });


  it('displays the provided value', () => {
    render(
      <Input
        label="Test Label"
        value="test value"
        onChange={mockOnChange}
      />
    );
    
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveValue('test value');
  });
}); 