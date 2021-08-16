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
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggleLogTemprature = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}>
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
                  onClick={this.handleToggleLogTemprature}
                  className={clsx(this.state.open && classes.hide)}
                >
                  <PostAddIcon style={{ height: "35px", width: "35px" }} />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <IconButton onClick={this.handleToggleLogTemprature} style={{marginTop:"5%"}}>
            {<Typography>Log Temperature</Typography>}
          </IconButton>
          <Divider />
          
        </Drawer>
      </div>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
};

export default withStyles(styles, { withTheme: true })(Appbar);
