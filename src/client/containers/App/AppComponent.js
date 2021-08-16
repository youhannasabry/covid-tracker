import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../../navigation';
import AppLayout from '../../components/common/AppLayout';
import Loading from '../../components/common/FullScreenLoading';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/purple';

class App extends Component {
  componentDidMount() {
    const { appStarted } = this.props;
    appStarted();
  }

  theme = createTheme({
    palette: {
      primary: {
        main: "#344955",
      },
      secondary: {
        main: red[500],
      },
    },
  });

  render() {
    const {
      appLoading
    } = this.props;

    if (appLoading) {
      return <Loading />;
    }

    return (
      <ThemeProvider theme={this.theme}>
        <Router>
          <SnackbarProvider>
            <AppLayout>
              <AppRoutes {...this.props} />
            </AppLayout>
          </SnackbarProvider>
        </Router>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  appStarted: PropTypes.func.isRequired,
  appLoading: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired
};

export default App;
