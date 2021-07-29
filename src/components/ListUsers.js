import React from 'react';
import Card from './UI/Card';
import styles from './ListUsers.module.css';

const ListUsers = ({ user }) => {

    const { name, age } = user;

    return (  
        <>
            <Card className={styles.users}>
                <ul>
                    <li>
                        <p>User Name: <span>{ name }</span></p>
                        <p>User Age: <span>({age})</span> Years old </p>
                    </li>
                </ul>
            </Card>
        </>
    );
}

export default ListUsers;