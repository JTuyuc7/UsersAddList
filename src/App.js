import React, {useState} from 'react';
import UserForm from './components/UserForm';
import ListUsers from './components/ListUsers';

const App = () => {

  const [ users, setUsers ] = useState([]);

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
          { users.length === 0 ? ( <p style={{ textAlign: 'center', color: 'white', fontWeight: 'bold'}}>No users yet, add a new one</p> ) :
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