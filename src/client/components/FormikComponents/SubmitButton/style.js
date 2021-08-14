export default theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      width: `100%`,
    },
  },
});
