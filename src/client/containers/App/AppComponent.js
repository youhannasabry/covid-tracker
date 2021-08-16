import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../../navigation';
import AppLayout from '../../components/common/AppLayout';
import Loading from '../../components/common/FullScreenLoading';

class App extends Component {
  componentDidMount() {
    const { appStarted } = this.props;
    appStarted();
  }

  render() {
    const {
      appLoading
    } = this.props;

    if (appLoading) {
      return <Loading />;
    }
    return (
      <Router>
        <SnackbarProvider>
          <AppLayout>
            <AppRoutes {...this.props} />
          </AppLayout>
        </SnackbarProvider>
      </Router>
    );
  }
}

App.propTypes = {
  appStarted: PropTypes.func.isRequired,
  appLoading: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired
};

export default App;
