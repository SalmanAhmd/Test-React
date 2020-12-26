import React, { useState, useEffect } from 'react';

import { Account, Button, TestHook, TestHookContext } from './component'
import './App.scss';
import Context from './store/context';


function App() {

  const [state, setState] = useState({
    isLoading: true,
    users: [],
    error: null,
    home: "home testing"
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


  const [state1, setState1] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve")
  }
  const changeText = () => {
    setState1("Some Other Text")
  }


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

      {/* -------------------- */}
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
      <h1> Basic Hook useContext</h1>
      <Context.Provider value={{
        changeTextProp: changeText,
        stateProp: state1
      }} >
        <TestHookContext />
      </Context.Provider>
    </>
  );
}

export default App;
