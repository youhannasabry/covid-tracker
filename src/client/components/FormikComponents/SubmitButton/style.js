export default theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width: `100%`,
    },
  }
});
