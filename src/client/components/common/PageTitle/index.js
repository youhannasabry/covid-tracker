import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './style';

const PageTitle = ({ title, classes }) => {
  return (
    <Typography variant="h4" gutterBottom className={classes.text}>
      {title}
    </Typography>
  );
};
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

PageTitle.defaultProps = {};

export default withStyles(styles, { withTheme: true })(PageTitle);
