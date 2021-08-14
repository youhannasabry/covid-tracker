export default theme => ({
  text: {
    paddingBottom: theme.spacing.unit * 2,
    fontWeight: 700,
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
    },
  },
});
