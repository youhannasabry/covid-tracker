export default theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    maxHeight: 700,
    // margin: 'auto',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 420,
      maxHeight: 650,
    },
  },
  scannerWrapper: {
    position: 'relative',
    '@global': {
      video: {
        width: '100%',
        border: '5px solid',
      },
      canvas: {
        display: 'none',
      },
    },
  },

});
