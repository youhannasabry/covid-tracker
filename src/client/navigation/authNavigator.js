import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AuthContainer from '../containers/Auth/AuthContainer';

const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact key="login" path="/" component={AuthContainer} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(AuthRoutes);
