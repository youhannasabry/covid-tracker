import MenuItems from '../navigation/routes';
/*eslint-disable*/
export const getLabel = () => {
  const { pathname } = location;
  let label;
  MenuItems.forEach(item => {
    if (item.path && item.path === pathname) {
      label = item.label;
    }
    if (item.routes) {
      item.routes.forEach(subItem => {
        if (subItem.path && `${item.path}${subItem.path}` === pathname) {
          label = subItem.label;
        }
      });
    }
  });
  return label;
};
