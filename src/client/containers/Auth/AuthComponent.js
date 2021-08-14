import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoginForm from '../../components/Forms/LoginForm';

const AuthComponent = ({ classes, login, loading, error }) => (
  <div className={classes.root}>
    {loading && <LinearProgress />}

    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <LinearProgress color="secondary" />
        <Avatar className={classes.avatar}>
          <img
            width="25"
            height="22"
            alt="logo"
            src="https://"
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          COVID-19 Tracker
        </Typography>
        <div className={classes.form}>
          <LoginForm loading={loading} onSubmit={login} />
          <Typography className={classes.error} color="error" align="center">
            {error && error.message}
          </Typography>
        </div>
      </Paper>
    </main>
  </div>
);

AuthComponent.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any, //eslint-disable-line
};

export default AuthComponent;
