import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
// import Drawer from '../Drawer';
import Appbar from '../Appbar';
import SnackBar from '../../../lib/snackbar';
import styles from './style';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes,
      children,
      logout,
    } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Appbar
          logout={logout}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>

        <SnackBar />
      </div>
    );
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  children: PropTypes.any, //eslint-disable-line
};

export default withStyles(styles, { withTheme: true })(AppLayout);
