import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
//Loading Logo Image Here
// import Logo from '../../../images/logo-large.png';
import styles from './style';

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <LinearProgress color="#000" />
    <div className={classes.body}>
      {/* <img src={Logo} height={80} alt="logo" /> */}
      <CircularProgress color="#000" style={{ marginTop: 20 }} />
    </div>
  </div>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
};

Loading.defaultProps = {};

export default withStyles(styles)(Loading);
