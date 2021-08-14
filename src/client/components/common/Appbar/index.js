import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.flex} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={'material-appbar'}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
  theme: PropTypes.object.isRequired, //eslint-disable-line
  handleDrawerToggle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Appbar);
