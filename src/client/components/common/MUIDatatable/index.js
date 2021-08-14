import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DataTable from 'mui-datatables';
import styles from './style';

const MUIDataTable = props => {
  const { classes, options, title } = props;

  const customOptions = {
    filterType: 'checkbox',
    responsive: 'stacked',
    elevation: 2,
    print: false,
    rowsPerPage: 100,
    ...options,
  };

  const allCapsTitle = title && title.toUpperCase();

  return (
    <div className={classes.root}>
      <DataTable {...props} title={allCapsTitle} options={customOptions} />
    </div>
  );
};

MUIDataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MUIDataTable);
