import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Foot from './components/Foot';
import UserForm from './components/UserForm';
import Ballot from './components/Ballot';
import Explore from './components/Explore';

import './App.css';

import { useState } from 'react';

function App() {
  const [userStatus, setUserStatus] = useState({
    loginStatus: false,
    userForm: false,
    userID: ''
  });

  console.log(userStatus);
  return (
    <div className="App">
      <Nav userStatus={userStatus} setUserStatus={setUserStatus} />
      <Switch>
        <Route exact path="/" render={Landing} />
        <Route
          exact
          path="/profile"
          render={() => <Profile userStatus={userStatus} />}
        />
        <Route
          exact
          path="/ballot"
          render={() => <Ballot userStatus={userStatus} />}
        />
        <Route
          exact
          path="/explore"
          render={() => <Explore userStatus={userStatus} />}
        />
      </Switch>
      <Foot />
      {!userStatus.userForm ? null : (
        <UserForm userStatus={userStatus} setUserStatus={setUserStatus} />
      )}
    </div>
  );
}

export default App;
