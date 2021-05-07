import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../content';
import styles from './content-page.scss';

const ContentPage = () => {
    return (
        <div
            data-qa="content-page"
            className={styles.container}
        >
            <h2 data-qa="content-page-title">Content Page</h2>
            <Content />
            <div data-qa="home-page-link">
                <Link to="/">Home Page</Link>
            </div>
        </div>
    );
};

export default ContentPage;
