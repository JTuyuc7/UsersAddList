import React from 'react';
import Card from './Card';
import CustomButton from './CustomButton';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (  
        <>
            <div className={styles.backdrop} onClick={props.errorHandler} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={styles.actions}>
                    <CustomButton 
                        onClick={ props.errorHandler}
                    >Close</CustomButton>
                </footer>
            </Card>
        </>
    );
}

export default ErrorModal;