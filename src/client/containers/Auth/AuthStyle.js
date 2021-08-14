export default theme => ({
  root: {
    display: 'flex',
    flex: 1,
  },
  main: {
    width: 'auto',
    display: 'flex',
    maxWidth: 400,
    flex: 1,
    justifyContent: 'center',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#fff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 2,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  error: {
    marginTop: theme.spacing.unit * 2,
  },
});
