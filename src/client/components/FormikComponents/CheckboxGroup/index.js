import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import styles from './style';

const CheckboxGroup = props => {
  const { classes, options, label, required, formikProps, name } = props;
  const { values, errors, touched, setFieldValue } = formikProps;

  const handleChange = (e, item) => {
    const isChecked = Array.isArray(values[name]) && values[name].find(v => item.value === v);
    if (isChecked) {
      setFieldValue(name, values[name].filter(v => v !== e.target.value));
    } else {
      setFieldValue(name, [...values[name], e.target.value]);
    }
  };

  return (
    <Grid className={classes.root} container>
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
          htmlFor={`checkbox-${name}`}
          error={touched[name] && errors[name]}
        >
          {label}
        </FormLabel>
      </Grid>

      <Grid justify="center" md={5} xs={12} item>
        <FormControl component="fieldset" fullWidth error={touched[name] && errors[name]}>
          <FormGroup id={`checkbox-${name}`} name={name} className={classes.group}>
            {options.map(item => (
              <FormControlLabel
                label={item.label}
                control={
                  <Checkbox
                    value={item.value}
                    onChange={e => handleChange(e, item)}
                    checked={Boolean(
                      Array.isArray(values[name]) && values[name].find(v => item.value === v)
                    )}
                  />
                }
              />
            ))}
          </FormGroup>

          <FormHelperText className={classes.helperText} id="checkbox-error-text">
            {touched[name] && errors[name]}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }).isRequired,
  formikProps: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  required: PropTypes.bool,
  'options.map': PropTypes.func,
};

CheckboxGroup.defaultProps = {
  required: false,
};

export default withStyles(styles)(CheckboxGroup);
