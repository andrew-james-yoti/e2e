import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './home-page';

const getElement = () => (
    render(
        <HomePage />,
    )
);

describe('HomePage', () => {
    describe('Component Elements', () => {
        afterEach(() => {
            cleanup();
        });

        it('should ...', () => {
            expect(false).toBeTruthy();
        });
    });
});
