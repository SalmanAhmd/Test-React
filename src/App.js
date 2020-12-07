import React, { useState, useEffect } from 'react';

import { Account, Button } from './component'
import './App.scss';


function App() {

  const [state, setState] = useState({
    isLoading: true,
    users: [],
    error: null,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) =>
        setState(prev => ({
          ...prev,
          users: data,
          isLoading: false,
        })))
      .catch((error) => setState(prev => ({
        ...prev,
        error,
        isLoading: false
      })));
  }, [setState])

  const { isLoading, users, error } = state;

  return (
    <>
      <h1>Display Active Users Account Details</h1>
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.map((user) => {
          return <Account key={user.username} user={user} />;
        })
      ) : (
          <h3>Fetching Users...</h3>
        )}
      <Button label='button' />
      {/* <div className="App">
      </div> */}
    </>
  );
}

export default App;
