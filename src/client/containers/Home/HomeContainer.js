import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import HomeComponent from './HomeComponent';
import styles from './HomeStyle';

const mapStateToProps = state => ({
  loading: state.home.loading,
  error: state.home.error,
  open: state.home.open
});

const mapDispatchToProps = dispatch => ({
});

const HomeWithStyles = withStyles(styles, { withTheme: true });

const HomeWithRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(HomeWithStyles, HomeWithRedux)(HomeComponent);
