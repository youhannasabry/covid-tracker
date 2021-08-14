export default theme => ({
  root: {
    marginBottom: theme.spacing.unit * 2,
  },
  labelContainer: {
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
  helperText: {
    marginLeft: 0,
  },
});
