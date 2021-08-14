import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AuthComponent from './AuthComponent';
import * as AuthActions from './AuthRedux';
import styles from './AuthStyle';
import { userSelector } from '../../redux/selectors';

const mapStateToProps = state => ({
  user: userSelector(state),
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(AuthActions.login(credentials)),
});

const AuthWithStyles = withStyles(styles, { withTheme: true });

const AuthWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  AuthWithStyles,
  AuthWithRedux
)(AuthComponent);
