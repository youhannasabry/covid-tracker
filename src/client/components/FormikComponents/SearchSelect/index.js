import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import styles from './style';

const SearchSelect = props => {
  const { formikProps, classes, name, fullWidth, maxWidth, options, required } = props;
  const { values, handleBlur, errors, touched, setFieldValue, initialValues } = formikProps;
  let inputWidth = 5;
  if (maxWidth) {
    inputWidth = 12;
  }
  if (fullWidth) {
    inputWidth = 9;
  }
  return (
    <Grid className={classes.root} container>
      <Grid justify="center" md={inputWidth} xs={12} item>
        <FormControl variant="filled" fullWidth error={touched[name] && errors[name]}>
          <Autocomplete
            id={`select-input-${name}`}
            options={options}
            onInputChange={(e, value) => {
              const f = options.find(o => o.label === value);
              if (f) setFieldValue(name, f.value);
            }}
            disableClearable
            getOptionLabel={option => option.label}
            fullwidth
            renderInput={params => (
              <TextField
                id={`input-${name}`}
                name={name}
                variant="filled"
                style={{ width: '100%' }}
                value={values[name]}
                type="input"
                required={required}
                onBlur={handleBlur}
                className={classes.input}
                aria-describedby="input-error-text"
                {...props}
                {...params}
              />
            )}
          />

          <FormHelperText className={classes.helperText} id="input-error-text">
            {touched[name] && errors[name]}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

SearchSelect.propTypes = {
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

SearchSelect.defaultProps = {
  required: false,
  fullWidth: false,
  maxWidth: false,
  password: false,
  hideLabel: false,
};

export default withStyles(styles, { withTheme: true })(SearchSelect);
