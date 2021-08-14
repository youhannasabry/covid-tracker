export default () => ({
  root: {
    display: 'block', // Fix IE 11 issue.
    height: 500,
  },
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 200,
  },
});
