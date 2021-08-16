import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import styles from './style';

const InputComponent = props => {
  const { formikProps, classes, label, name, fullWidth, maxWidth, password, required } = props;
  const { values, handleChange, handleBlur, errors, touched } = formikProps;
  let inputWidth = 5;
  if (maxWidth) {
    inputWidth = 12;
  }
  if (fullWidth) {
    inputWidth = 9;
  }

  return (
    <Grid className={classes.root} container>
      {/* !hideLabel && (
        <Grid
          justify="center"
          direction="row"
          alignItems="center"
          className={classes.labelContainer}
          md={3}
          xs={12}
          item
        >
          <FormLabel
            required={required}
            htmlFor={`input-${name}`}
            error={touched[name] && errors[name]}
          >
            {label}
          </FormLabel>
        </Grid>
      ) */}

      <Grid md={inputWidth} xs={12} item>
        <FormControl
          required={required}
          variant="filled"
          fullWidth
          error={touched[name] && errors[name]}
        >
          <InputLabel htmlFor={`input-${name}`} color="primary">{label}</InputLabel>
          <FilledInput
            id={`input-${name}`}
            name={name}
            fullWidth
            value={values[name]}
            onChange={handleChange}
            type={password ? 'password' : 'input'}
            onBlur={handleBlur}
            className={classes.input}
            aria-describedby="input-error-text"
            // {...props}
            required={required}
            color="primary"
            style={{width: "299px"}}
          />

          <FormHelperText className={classes.helperText} id="input-error-text">
            {touched[name] && errors[name]}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

InputComponent.propTypes = {
  formikProps: PropTypes.object.isRequired, //eslint-disable-line
  classes: PropTypes.object.isRequired, //eslint-disable-line
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.bool,
  password: PropTypes.bool,
  hideLabel: PropTypes.bool,
};

InputComponent.defaultProps = {
  required: false,
  fullWidth: false,
  maxWidth: false,
  password: false,
  hideLabel: false,
};

export default withStyles(styles, { withTheme: true })(InputComponent);
