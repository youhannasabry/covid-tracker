import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppComponent from './AppComponent';
import * as AppActions from './AppRedux';
import * as AuthActions from '../Auth/AuthRedux';
import { userSelector } from '../../redux/selectors';
import styles from './AppStyle';

const mapStateToProps = state => ({
  user: userSelector(state),
  initialized: state.app.initialized,
  appLoading: state.app.loading,
  locale: state.app.locale,
  theme: state.app.theme,
});

const mapDispatchToProps = dispatch => ({
  appStarted: () => dispatch(AppActions.appStarted()),
  logout: () => dispatch(AuthActions.logout()),
});

const AppWithStyles = withStyles(styles, { withTheme: true });

const AppWithRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(AppWithStyles, AppWithRedux)(AppComponent);
