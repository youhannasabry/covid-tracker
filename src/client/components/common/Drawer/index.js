import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
// import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';
import styles from './style';
import MenuItems from '../../../navigation/routes';
import { testNavPath } from '../../../navigation/index';

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = location; //eslint-disable-line
    this.state = {
      // menuStatus: MenuItems.map(item => !pathname.search(item.path) > 0),
      menuStatus: MenuItems.map(() => false),
    };
  }

  handleClick = index => {
    this.setState(state => ({
      menuStatus: state.menuStatus.map((menu, i) =>
        i === index ? !state.menuStatus[i] : state.menuStatus[i]
      ),
    }));
  };

  renderDrawerItem = (item, index, classes, handleDrawerToggle) => {
    const { menuStatus } = this.state;
    const { user } = this.props;
    const { modules } = user || {};
    const { pathname } = location; //eslint-disable-line
    if (item.path === '/') return <div key={item.path} />;
    if (!item.label) return <div key={item.path} />;

    return item.routes
      ? testNavPath(user.role, modules, item.path) && (
          <div key={item.label}>
            <ListItem button onClick={() => this.handleClick(index)}>
              {/* <ListItemAvatar>{item.icon}</ListItemAvatar> */}
              <Typography className={classes.mainListTest}>
                <b>{item.label}</b>
              </Typography>
              {/* menuStatus[index] ? <ExpandLess /> : <ExpandMore /> */}
            </ListItem>
            <Collapse in={menuStatus[index]} timeout="auto" unmountOnExit>
              <List dense component="div" disablePadding>
                {item.routes
                  .filter(subItem => testNavPath(user.role, modules, subItem.path))
                  .map(subItem => {
                    if (!subItem.label) return <div key={subItem.path} />;
                    return (
                      <NavLink
                        className={classes.navLink}
                        onClick={handleDrawerToggle}
                        to={`${item.path}${subItem.path}`}
                        key={subItem.label}
                      >
                        <ListItem
                          selected={pathname.search(subItem.path) > 0}
                          button
                          className={classes.nested}
                        >
                          {/* <ListItemIcon>{subItem.icon}</ListItemIcon> */}
                          <ListItemText primary={subItem.label} />
                        </ListItem>
                      </NavLink>
                    );
                  })}
              </List>
            </Collapse>
            <Divider />
          </div>
        )
      : testNavPath(user.role, modules, item.path) && (
          <NavLink className={classes.navLink} to={item.path} key={item.label}>
            <ListItem button selected={!pathname.search(item.path) > 0}>
              <ListItemAvatar>{item.icon}</ListItemAvatar>
              <ListItemText primary={item.label} />
            </ListItem>
            <Divider />
          </NavLink>
        );
  };

  renderDrawer = handleDrawerToggle => {
    const { classes, theme } = this.props;
    const imageLogo =
      theme.palette.type === 'dark' ? '/images/full-white-logo.png' : '/images/full-dark-logo.png';
    return (
      <div>
        <NavLink className={classes.navLink} to="/">
          <div className={classes.toolbar}>
            <img src={imageLogo} className={classes.logoImage} width="120" alt="" />
            {/* <Typography variant="h6">ERP</Typography> */}
            {/* <Typography className={classes.logoImage} variant="caption">v{version}</Typography> */}
          </div>
        </NavLink>
        <Divider />
        <List>
          {MenuItems.map((item, index) =>
            this.renderDrawerItem(item, index, classes, handleDrawerToggle)
          )}
        </List>
      </div>
    );
  };

  render() {
    const { classes, theme, handleDrawerToggle, mobileOpen } = this.props;

    return (
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {this.renderDrawer(handleDrawerToggle)}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {this.renderDrawer(null)}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
  theme: PropTypes.object.isRequired, //eslint-disable-line
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
