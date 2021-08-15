import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            <img
              width="50"
              height="50"
              alt="logo"
              src="/favicon.ico"
            />
          </div>
          <Typography variant="h5" className={classes.title}>COVID-19 Tracker</Typography>
          <div className={classes.log}>
            <Tooltip
              title="Log Temperature"
              enterDelay={300}
            >
              <IconButton
                style={{ color: "white" }}
                onClick={this.handleProfileMenuOpen}
              >
                <PostAddIcon style={{ height: "35px", width: "35px" }} />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
};

export default withStyles(styles, { withTheme: true })(Appbar);
