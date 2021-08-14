import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({
  open,
  toggleAlert,
  title,
  content,
  onSubmit,
  submit,
  submitLabel,
  cancelLabel,
  children,
  maxWidth,
}) => {
  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    toggleAlert();
  };

  return (
    <Dialog
      open={open}
      onClose={toggleAlert}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={maxWidth}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          autoFocus
          type={submit && 'submit'}
        >
          {submitLabel}
        </Button>
        <Button onClick={toggleAlert} color="secondary">
          {cancelLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleAlert: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  children: PropTypes.node,
  maxWidth: PropTypes.string.isRequired,
  submit: PropTypes.any.isRequired,
};

AlertDialog.defaultProps = {
  submitLabel: 'OK',
  cancelLabel: 'Cancel',
  children: null,
};

export default AlertDialog;
