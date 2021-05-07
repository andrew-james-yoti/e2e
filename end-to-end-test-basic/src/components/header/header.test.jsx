import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

const getElement = () => (
    render(
        <Header />,
    )
);

describe('Header', () => {
    describe('Component Elements', () => {
        afterEach(() => {
            cleanup();
        });

        it('should ...', () => {
            expect(false).toBeTruthy();
        });
    });
});
