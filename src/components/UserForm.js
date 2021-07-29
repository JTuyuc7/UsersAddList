import React, {useState} from 'react';
import Card from './UI/Card';
import CustomButton from './UI/CustomButton';
import styles from './UserForm.module.css';

const UserForm = ({addNewUserData}) => {

    //State for the form data
    const [ data, setData ] = useState({
        name: '',
        age: 0
    });
    //State to validate any errors
    const [ error, setError ] = useState(false)

    const { name, age } = data;

    const handlerInfoChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })   
    }

    const addNewUser = (e) => {
        e.preventDefault()

        if( name.trim() === ''){
            console.log('Name can not be empty')
            setError(true)
            return
        }

        if( age <= 0 ){
            console.log('Age can not be 0')
            setError(true)
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

    return (  
        <>
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