import React from 'react';
import PBY from './poweredBy.svg';
import styles from './image.scss';

const Image = () => {
    return (
        <div
            data-qa="image"
            className={styles.container}
        >
            <img src={PBY} data-qa="yoti-logo" className={styles.image} />
        </div>
    );
};

export default Image;
