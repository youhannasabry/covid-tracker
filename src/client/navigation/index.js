import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import routes from './routes';

export const testNavPath = (role, modules, path) => {
  let found = true;
  //Logic of auth and access control here
  return found;
};

const renderRoutes = props => {
  const { user } = props;
  const { modules } = user || {};
  const routesToRender = [];
  routes
    .filter(route => testNavPath('', modules, route.path))
    .forEach(route => {
      if (route.component)
        routesToRender.push(
          <Route exact path={route.path} component={route.component} key={route.path} />
        );
      if (route.routes) {
        route.routes
          .filter(subRoute => testNavPath('', modules, subRoute.path))
          .forEach(subRoute => {
            if (subRoute.component) {
              routesToRender.push(
                <Route
                  exact
                  path={`${route.path}${subRoute.path}`}
                  component={subRoute.component}
                  key={route.path}
                />
              );
            }
          });
      }
    });
  routesToRender.push(
    <Route
      key="404"
      component={() => (
        <Typography variant="h4" style={{ padding: 20 }}>
          404 - Not Found
        </Typography>
      )}
    />
  );
  return routesToRender;
};

const AppRoutes = props => <Switch>{renderRoutes(props)}</Switch>;

export default withRouter(AppRoutes);
