import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Content from './content';

const getElement = () => (
    render(
        <Content />,
    )
);

describe('Content', () => {
    describe('Component Elements', () => {
        afterEach(() => {
            cleanup();
        });

        it('should ...', () => {
            expect(false).toBeTruthy();
        });
    });
});
