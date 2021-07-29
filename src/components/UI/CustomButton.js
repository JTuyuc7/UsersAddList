import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = (props) => {
    return (  
        <>
            <button 
                className={styles.button} 
                type={props.type || 'button'} 
                onClick={props.onClick}>{props.children}</button>
        </>
    );
}

export default CustomButton;