import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import HomeComponent from './HomeComponent';
import * as HomeActions from './HomeRedux';
import styles from './HomeStyle';
import { userSelector } from '../../redux/selectors';

const mapStateToProps = state => ({
  user: userSelector(state),
  loading: state.home.loading,
  error: state.home.error,
});

const mapDispatchToProps = dispatch => ({
});

const HomeWithStyles = withStyles(styles, { withTheme: true });

const HomeWithRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(HomeWithStyles, HomeWithRedux)(HomeComponent);
