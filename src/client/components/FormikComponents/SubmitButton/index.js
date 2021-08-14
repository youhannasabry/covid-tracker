import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './style';

const SubmitButton = ({ classes, label, ...props }) => (
  <div className={classes.root}>
    <Button
      type="submit"
      variant="contained"
      size="large"
      color="primary"
      className={classes.button}
      {...props}
    >
      {label}
    </Button>
  </div>
);

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {};

export default withStyles(styles)(SubmitButton);
