import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from './image';

const getElement = () => (
    render(
        <Image />,
    )
);

describe('Image', () => {
    describe('Component Elements', () => {
        afterEach(() => {
            cleanup();
        });

        it('should ...', () => {
            expect(false).toBeTruthy();
        });
    });
});
