import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [usernameState, setUsernameState] = useState('');
  const [ageState, setAgeState] = useState('');
  const [error, setError] = useState();

  const onChangeUsername = (event) => {
    setUsernameState(event.target.value);
  };

  const onChangeAge = (event) => {
    setAgeState(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (usernameState.trim().length === 0 || ageState.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Plase fill the input form',
      });
      return;
    }
    if (+ageState < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age',
      });
      return;
    }

    const user = {
      id: Math.random().toString(),
      username: usernameState,
      age: ageState,
    };

    props.onAddUser(user);

    setAgeState('');
    setUsernameState('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={usernameState}
            onChange={onChangeUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={ageState}
            onChange={onChangeAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
