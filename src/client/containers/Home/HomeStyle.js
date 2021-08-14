export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  sectionTitle: {
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing.unit * 3,
    },
  },
  chartsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
});
