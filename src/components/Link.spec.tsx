import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from '.';
import '@testing-library/jest-dom/extend-expect';

test('Should have component rendered', () => {
    const TITLE = 'title'
    render(<Link>{TITLE}</Link>);

    expect(screen.getByTestId('link')).toHaveTextContent(TITLE);
});