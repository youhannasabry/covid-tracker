import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DateModal from '../../Modals/DateModal';
const styles = () => ({});
class DateSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateModal: false,
    };
  }

  toggleDateModal = () => {
    this.setState(prevState => ({ dateModal: !prevState.dateModal }));
  };

  render() {
    {
      const { toDate, fromDate, period, submitDate } = this.props;
      const { dateModal } = this.state;
      return (
        <Grid xs={12} item>
          <Button variant="contained" color="primary" onClick={this.toggleDateModal}>
            <b>{period ? `Date: ${period}` : `Date: All Time`}</b>
          </Button>
          <DateModal
            open={dateModal}
            toggleModal={this.toggleDateModal}
            submitDate={submitDate}
            period={period}
            fromDate={fromDate}
            toDate={toDate}
          />
        </Grid>
      );
    }
  }
}
DateSelect.propTypes = {
  submitDate: PropTypes.func.isRequired,
  deleteDate: PropTypes.func.isRequired,
  period: PropTypes.string,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
};
DateSelect.defaultProps = {
  period: 'today',
  fromDate: '',
  toDate: '',
};

export default withStyles(styles, { withTheme: true })(DateSelect);
