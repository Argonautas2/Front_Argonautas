import React from 'react';
import ButtonLoading from 'components/ButtonLoading';
import { render, screen, cleanup } from '@testing-library/react';


it('renders okay', () => {
    render(<ButtonLoading text='hola' loading={false} disabled={false} />);
    expect(screen.getByTestId('button-loading')).toBeInTheDocument();
  });