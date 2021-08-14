import { DRAWER_WIDTH } from '../../../constants';

export default theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  logoImage: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '15px',
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    fontSize: 12,
  },
  mainListTest: {
    textTransform: 'capitalize',
  },
  navLink: {
    textDecoration: 'none',
  },
});
