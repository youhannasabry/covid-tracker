import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import LocaleProvider from '../../i18n';
import AppRoutes from '../../navigation';
import AuthRoutes from '../../navigation/authNavigator';
import AppLayout from '../../components/common/AppLayout';
import Loading from '../../components/common/FullScreenLoading';

class App extends Component {
  componentDidMount() {
    const { appStarted } = this.props;
    appStarted();
  }

  render() {
    const {
      locale,
      user,
      appLoading,
      logout,
    } = this.props;

    if (appLoading) {
      return <Loading />;
    }
    return (
      <Router>
        <MuiThemeProvider>
          <LocaleProvider locale={locale}>
            <SnackbarProvider>
              <AppLayout>
                <AppRoutes {...this.props} />
              </AppLayout>
            </SnackbarProvider>
          </LocaleProvider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  appStarted: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  appLoading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default App;
