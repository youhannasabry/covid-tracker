import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import styles from './style';

const RadioGroupComponent = props => {
  const { classes, options, label, labelPlacement, required, formikProps, name } = props;
  const { values, errors, touched, setFieldValue } = formikProps;
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
          htmlFor={`radio-${name}`}
          error={touched[name] && errors[name]}
        >
          {label}
        </FormLabel>
      </Grid>
      <Grid justify="center" md={5} xs={12} item>
        <FormControl component="fieldset" fullWidth error={touched[name] && errors[name]}>
          <RadioGroup
            id={`radio-${name}`}
            aria-label={label}
            name={name}
            className={classes.group}
            value={values[name]}
            onChange={e => setFieldValue(name, e.target.value)}
            aria-describedby="radio-error-text"
          >
            {options.map(item => (
              <FormControlLabel
                label={item.label}
                value={item.value}
                labelPlacement={labelPlacement}
                control={<Radio color="primary" />}
              />
            ))}
          </RadioGroup>

          <FormHelperText className={classes.helperText} id="radio-error-text">
            {touched[name] && errors[name]}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

RadioGroupComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }).isRequired,
  formikProps: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  labelPlacement: PropTypes.oneOf('start', 'bottom', 'end', 'top'),
  required: PropTypes.bool,
};

RadioGroupComponent.defaultProps = {
  labelPlacement: 'end',
  required: false,
};

export default withStyles(styles)(RadioGroupComponent);
