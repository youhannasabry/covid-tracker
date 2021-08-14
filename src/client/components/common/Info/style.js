export default theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit * 2,
    },
  },
  label: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  value: {
    paddingLeft: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
  },
});
