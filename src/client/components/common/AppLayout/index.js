import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
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
    } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Appbar />
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
  children: PropTypes.any, //eslint-disable-line
};

export default withStyles(styles, { withTheme: true })(AppLayout);
