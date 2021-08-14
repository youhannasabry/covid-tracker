import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class Modal extends React.Component {
  transitionComponent = props => <Slide direction="up" {...props} />;

  renderDialogHeader = title => {
    const { classes, toggleModal } = this.props;
    return (
      <DialogTitle className={classes.header}>
        <Typography variant="h6">{title}</Typography>
        <IconButton aria-label="Close" className={classes.closeButton} onClick={toggleModal}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    );
  };

  render() {
    const { title, fullScreen, children, classes, open, toggleModal } = this.props;
    return (
      <Dialog
        open={open}
        fullScreen={fullScreen}
        TransitionComponent={this.transitionComponent}
        fullWidth
        // maxWidth="md"
        onClose={toggleModal}
      >
        {this.renderDialogHeader(title)}
        <DialogContent className={classes.dialogContent}>{children}</DialogContent>
      </Dialog>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  title: '',
  open: false,
};

const ResponsiveDialog = withMobileDialog()(Modal);
export default withStyles(styles, { withTheme: true })(ResponsiveDialog);
