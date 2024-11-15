import React, { useState, useEffect } from 'react';
import styles from './Loader.module.scss';
import cub from '../../../assets/cub.png';

const Loader: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('Content is loading...');
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';


        const timer = setTimeout(() => {
            setIsChanging(true);
            setTimeout(() => {
                setMessage('Content is loaded✅ Welcome👋!');
                setIsChanging(false);
            }, 500);
        }, 1000);

        const hideTimer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = 'auto';
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <>
            {loading && (
                <div className={styles.preloader}>
                    <h1 className={`${styles.preloaderText} ${isChanging ? styles.fadeOut : styles.fadeIn}`}>
                        {message}
                    </h1>
                    <img src={cub} alt="Loading..." className={styles.spinner} />
                </div>
            )}
        </>
    );
};

export default Loader;
