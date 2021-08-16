import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppComponent from './AppComponent';
import * as AppActions from './AppRedux';
import styles from './AppStyle';

const mapStateToProps = state => ({
  initialized: state.app.initialized,
  appLoading: state.app.loading,
  theme: state.app.theme,
  open: state.app.open
});

const mapDispatchToProps = dispatch => ({
  appStarted: () => dispatch(AppActions.appStarted())
});

const AppWithStyles = withStyles(styles, { withTheme: true });

const AppWithRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(AppWithStyles, AppWithRedux)(AppComponent);
