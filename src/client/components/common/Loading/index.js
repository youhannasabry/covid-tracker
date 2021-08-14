import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './style';

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
  </div>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
};

Loading.defaultProps = {};

export default withStyles(styles)(Loading);
