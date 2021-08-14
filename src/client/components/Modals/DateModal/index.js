import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Grid, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import dateObject from 'elprices-models/utils/date/index.js';
import empty from 'is-empty';
import { withStyles } from '@material-ui/core/styles';
import Alert from '../../common/Alert';

const styles = theme => ({
  label: {
    textTransform: 'uppercase',
  },
  tab: {
    minWidth: 80,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.60rem',
      minWidth: 35,
    },
  },
  radio: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.60rem',
    },
  },
});
class DateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: dateObject.periodToTabs(props.period || 'today'),
      period: props.period,
      fromDate: props.fromDate,
      toDate: props.toDate,
    };
  }

  handleChange = (event, period) => {
    this.setState({ period });
  };

  handleTabChange = (event, tab) => {
    this.setState({ tab });
    if (tab === 'custom') this.setState({ period: 'custom' });
    if (tab === 'all time') this.setState({ period: 'all time' });
  };

  handleFromDateChange = event => {
    this.setState({ fromDate: event.target.value });
  };

  handleToDateChange = event => {
    this.setState({ toDate: event.target.value });
  };

  submitDateChange = () => {
    const { period, fromDate, toDate } = this.state;
    const { submitDate } = this.props;
    if (period === 'custom' && (empty(fromDate) || empty(toDate))) return null;
    return submitDate({
      period,
      fromDate,
      toDate,
    });
  };

  render() {
    {
      const { open, toggleModal, classes } = this.props;
      const { tab, period, fromDate, toDate } = this.state;
      return (
        <Alert
          onSubmit={this.submitDateChange}
          open={open}
          toggleAlert={toggleModal}
          title="DATES"
          maxWidth="sm"
        >
          <>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={tab}
              scrollButtons="auto"
              onChange={this.handleTabChange}
            >
              <Tab className={classes.tab} label="Today" value="day" />
              <Tab className={classes.tab} label="Week" value="week" />
              <Tab className={classes.tab} label="Month" value="month" />
              <Tab className={classes.tab} label="Custom" value="custom" />
              <Tab className={classes.tab} label="All Time" value="all time" />
            </Tabs>
          </>
          <br />
          <>
            <Grid container>
              {Array.isArray(dateObject[tab]) && (
                <RadioGroup
                  onChange={this.handleChange}
                  aria-label="period"
                  value={period}
                  name="period"
                >
                  {dateObject[tab].map(item => (
                    <FormControlLabel
                      className={classes.label}
                      value={item}
                      control={<Radio className={classes.radio} />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              )}
              {tab === 'custom' && (
                <Grid container>
                  <Grid xs={6} md={3} item container>
                    <Grid xs={12} item>
                      <TextField
                        type="date"
                        required
                        label="From Date"
                        id="input-search"
                        defaultValue={fromDate}
                        onChange={this.handleFromDateChange}
                        aria-describedby="input-error-text"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={6} md={3} item container>
                    <Grid xs={12} item>
                      <TextField
                        type="date"
                        required
                        id="input-search"
                        label="To Date"
                        defaultValue={toDate}
                        onChange={this.handleToDateChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        aria-describedby="input-error-text"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </>
          <br />
        </Alert>
      );
    }
  }
}
DateModal.propTypes = {
  open: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  submitDate: PropTypes.func.isRequired,
  period: PropTypes.string,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
};
DateModal.defaultProps = {
  period: 'all time',
  fromDate: '',
  toDate: '',
};
// export default DateModal;

export default withStyles(styles, { withTheme: true })(DateModal);
