import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '.';
import '@testing-library/jest-dom/extend-expect';

test('Should have component rendered', () => {
    render(<Navbar />);

    expect(screen.getByTestId('nav-title')).toHaveTextContent('Navigation');
});