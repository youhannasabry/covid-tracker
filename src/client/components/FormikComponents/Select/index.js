import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import styles from './style';

class SelectComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { getDataAction, dependencyFieldName, formikProps } = this.props;
    const oldFieldValue = formikProps.values[dependencyFieldName];
    const newFieldValue = nextProps.formikProps.values[dependencyFieldName];

    if (oldFieldValue !== newFieldValue) {
      if (typeof getDataAction === 'function' && dependencyFieldName) {
        const dependencyFieldValue = nextProps.formikProps.values[dependencyFieldName];
        getDataAction(dependencyFieldValue);
      }
    }
  }

  render() {
    const {
      classes,
      label,
      formikProps,
      name,
      options,
      disabled,
      variant,
      multiple,
      onSelect,
    } = this.props;
    const { values, errors, touched, setFieldValue } = formikProps;

    return (
      <Grid className={classes.root} container>
        {/* <Grid
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
            htmlFor={`select-${name}`}
            error={touched[name] && errors[name]}
          >
            {label}
          </FormLabel>
        </Grid> */}

        <Grid md={12} item>
          <FormControl variant={variant} fullWidth error={touched[name] && errors[name]}>
            <InputLabel htmlFor={`select-input-${name}`}>{label}</InputLabel>

            <Select
              id={`select-${name}`}
              value={values[name]}
              onChange={e => {
                setFieldValue(name, e.target.value);
                if (onSelect) onSelect(e.target.value);
              }}
              variant={variant}
              input={<FilledInput disabled={disabled} name={name} id={`select-input-${name}`} />}
              multiple={multiple}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {options && options.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
            </Select>

            <FormHelperText className={classes.helperText} id="select-error-text">
              {touched[name] && errors[name]}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }).isRequired,
  formikProps: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  getDataAction: PropTypes.func,
  dependencyFieldName: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  variant: PropTypes.string,
};

SelectComponent.defaultProps = {
  required: false,
  fullWidth: false,
  getDataAction: null,
  dependencyFieldName: '',
  disabled: false,
  multiple: false,
  variant:"standard"
};

export default withStyles(styles)(SelectComponent);
