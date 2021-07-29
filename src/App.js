import React, {useState} from 'react';
import UserForm from './components/UserForm';
import ListUsers from './components/ListUsers';

const initiaState = [
  { id: 1, name: 'James Tuyuc', age: 23 }
]

const App = () => {

  const [ users, setUsers ] = useState( initiaState );

  // Funcion para recibir los nuevos usuarios
  const addNewUserData = ( data ) => {
    setUsers([ data, ...users])
  }

  return (  
    <>
      <div>
        <UserForm
          addNewUserData={addNewUserData}
        />

        <div>
          { users.length === 0 ? ( <p>No users yet, add a new one</p> ) :
            (users?.map( (user) => {
              return (
                <ListUsers
                  key={ user.id }
                  user={user}
                />
              )
            }))
          }
        </div>
      </div>
    </>
  );
}

export default App;