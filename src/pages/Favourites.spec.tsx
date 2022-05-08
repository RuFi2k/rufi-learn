import React from 'react';
import { render, screen } from '@testing-library/react';
import { Favourites } from '.';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux';

test('Should have component rendered', () => {
    render(<Favourites />, { wrapper: ({ children }) => (
        <Provider store={store}>
            {children}
        </Provider>
    )});

    expect(screen.getByTestId('favourites-header')).toHaveTextContent('Favourites');
});