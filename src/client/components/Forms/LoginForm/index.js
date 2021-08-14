import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Input from '../../FormikComponents/Input';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(2)
        .required(),
    });

    this.initialValues = {
      email: '',
      password: '',
    };
  }

  onSubmit = values => {
    const { onSubmit } = this.props;

    const newValues = { ...values, email: values.email && values.email.toLowerCase() };
    onSubmit(newValues);
  };

  renderForm = formikProps => {
    const { loading } = this.props;
    return (
      <form onSubmit={formikProps.handleSubmit}>
        <Input
          label="Username"
          name="email"
          maxWidth
          hideLabel
          autoFocus
          formikProps={formikProps}
        />
        <Input
          label="Password"
          name="password"
          maxWidth
          hideLabel
          password
          formikProps={formikProps}
        />
        <Button
          type="submit"
          disabled={loading}
          fullWidth
          variant="contained"
          size="large"
          color="primary"
        >
          Sign in
        </Button>
      </form>
    );
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.LoginSchema}
        onSubmit={this.onSubmit}
        render={this.renderForm}
      />
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
  onSubmit: () => null,
};

export default LoginForm;
