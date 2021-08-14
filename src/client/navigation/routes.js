import Home from '../containers/Home/HomeContainer';

/*
 * define routes, menu labels and icons
 *
 * for subitems the url will be /parent-path/child-path
 *
 * always start the path with /
 *
 * if you dont want the route to be displayed in the menu, dont provide "label" property
 *
 * if you add "routes" property to a parent route, it will render an expandable
 * list in the menu with the routes as children
 *
 * only one level of nesting is supported
 */

export default [
  {
    path: '/',
    label: 'Home',
    component: Home,
  }
];
