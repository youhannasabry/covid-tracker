import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Formik } from 'formik';
import Input from '../../FormikComponents/Input';
import SubmitButton from '../../FormikComponents/SubmitButton';
import Select from '../../FormikComponents/Select';
import config from '../../../config';

const axios = require('axios')

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      countryName: '',
      countryCode: ''
    };
  }

  countries = [
    { id: "cn", name: "China" },
    { id: "in", name: "India" },
    { id: "us", name: "United States" },
    { id: "id", name: "Indonesia" },
    { id: "pk", name: "Pakistan" },
    { id: "br", name: "Brazil" },
    { id: "ng", name: "Nigeria" },
    { id: "bd", name: "Bangladesh" },
    { id: "ru", name: "Russia" },
    { id: "mx", name: "Mexico" }
  ];

  countryOptions = [];


  componentDidMount() {
    for (let country of this.countries) {
      this.countryOptions.push({ value: country.id, label: country.name });
    }
    this.getGeoInfo();
    console.log(config.automaticCountryDetection)
  }

  getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      console.log(data)
      this.setState({
        countryName: data.country_name,
        countryCode: data.country_code
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  handleToggleLogTemprature = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  logTemperatureSubmit = values => {
    if (config.automaticCountryDetection)
      values.country = this.state.countryCode;
    axios.post('http://localhost:4000/api/public/log', {
      name: values.name,
      phone: values.phone,
      email: values.email,
      country: values.country,
      temperature: values.temperature
    })
      .then(function (response) {
        console.log(response);
        alert(response.data && response.data.response);
      })
      .catch(function (err) {
        alert(err);
        console.log(err)
      });
  }

  initialValues = {
    name: '',
    phone: '',
    email: '',
    country: '',
    temperature: '',
  };

  renderForm = formikProps => {
    const width = "299px";
    return (
      <form onSubmit={formikProps.handleSubmit}>
        <Input style={{ width }} fullWidth label="Name" name="name" required formikProps={formikProps} />
        <Input style={{ width }} fullWidth label="Phone" name="phone" required formikProps={formikProps} />
        <Input style={{ width }} fullWidth label="Email" name="email" required formikProps={formikProps} />
        {!config.automaticCountryDetection && <Select fullWidth label="Country" name="country" required options={this.countryOptions} formikProps={formikProps} />}
        <Input style={{ width }} fullWidth label="Temperature" name="temperature" required formikProps={formikProps} />
        <br />
        <SubmitButton type="submit" label="Submit" />
      </form>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}>
          <Toolbar>
            <div className={classes.logo}>
              <img
                width="50"
                height="50"
                alt="logo"
                src="/favicon.ico"
              />
            </div>
            <Typography variant="h5" className={classes.title}>COVID-19 Tracker</Typography>
            <div className={classes.log}>
              <Tooltip
                title="Log Temperature"
                enterDelay={300}
              >
                <IconButton
                  style={{ color: "white" }}
                  onClick={this.handleToggleLogTemprature}
                  className={clsx(this.state.open && classes.hide)}
                >
                  <PostAddIcon style={{ height: "35px", width: "35px" }} />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Button onClick={this.handleToggleLogTemprature} style={{ marginTop: "5%" }} color="primary">
            <Typography>Log Temperature</Typography>
          </Button>
          <Divider />
          <br />
          <br />
          <Formik
            initialValues={this.initialValues}
            onSubmit={this.logTemperatureSubmit}
            render={this.renderForm}
          />
        </Drawer>
      </div>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
};

export default withStyles(styles, { withTheme: true })(Appbar);
