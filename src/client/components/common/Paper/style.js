export default theme => ({
  expandableRoot: {
    marginBottom: theme.spacing.unit * 3,
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paperTitle: {
    marginBottom: theme.spacing.unit * 2,
    textTransform: 'uppercase',
  },
  button: {
    paddingRight: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit,
  },
  content: {
    width: '100%',
  },
});
