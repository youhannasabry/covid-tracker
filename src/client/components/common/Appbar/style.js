import { fade } from '@material-ui/core/styles/colorManipulator';
import { DRAWER_WIDTH } from '../../../constants';

export default theme => ({
  root: {
    // width: '100%',
  },
  appBar: {
    marginLeft: DRAWER_WIDTH,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
  settingsIndicator: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.63rem',
    },
  },
  menuButton: {
    marginRight: 5,
    marginLeft: -10,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuLabel: {
    marginLeft: 10,
  },
  flex: {
    flex: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    display: 'none',
  },
  inputRoot: {
    color: 'primary',
    border: '1px solid #eee',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});
