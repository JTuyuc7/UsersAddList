import React, {useState} from 'react';
import Card from './UI/Card';
import CustomButton from './UI/CustomButton';
import styles from './UserForm.module.css';
import ErrorModal from './UI/ErrorModal';

const UserForm = ({addNewUserData}) => {

    //State for the form data
    const [ data, setData ] = useState({
        name: '',
        age: 0
    });
    //State to validate any errors
    const [ error, setError ] = useState()

    const { name, age } = data;

    const handlerInfoChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })   
    }

    const addNewUser = (e) => {
        e.preventDefault()

        if( name.trim() === '' || age <= 0 ){
            console.log('Name can not be empty')
            setError({
                title: 'Opps somenthing went wrong',
                content: 'Please enter a valid name and age'

            })
            return
        }

        // sent the info to the main page
        addNewUserData({
            id: Math.random(),
            name: name,
            age: age
        })

        //Resetear el formulario
        setData({
            name: '',
            age: 0
        })
    }

    //Reset the error
    const errorHandler = () => {
        setError(null)
    }

    return (  
        <>

            { error && (<ErrorModal title={ error.title } content={ error.content } errorHandler={errorHandler} />) }

            <Card className={ styles.input }>
                <form
                    onSubmit={ addNewUser }
                >
                    <div>
                        <label htmlFor="name">Name</label>

                        <input
                            type="text"
                            placeholder="Enter a name"
                            id="name"
                            name="name"
                            onChange={handlerInfoChange}
                            value={name}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>

                        <input
                            type="number"
                            min="0"
                            id="age"
                            name="age"
                            onChange={handlerInfoChange}
                            value={age}
                        />
                    </div>

                    <div>
                        <CustomButton
                            type='submit'
                        >Add User</CustomButton>
                    </div>
                </form>
            </Card>
        </>
    );
}

export default UserForm;