import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentPage from './content-page';

const getElement = () => (
    render(
        <ContentPage />,
    )
);

describe('ContentPage', () => {
    describe('Component Elements', () => {
        afterEach(() => {
            cleanup();
        });

        it('should ...', () => {
            expect(false).toBeTruthy();
        });
    });
});
