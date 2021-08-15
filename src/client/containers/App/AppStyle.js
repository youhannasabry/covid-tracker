export default theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
      padding: 0,
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3,
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,
    },
  }
});
