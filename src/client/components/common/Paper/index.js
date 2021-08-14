import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Loading from '../Loading';
import styles from './style';

const PaperSheet = ({ classes, title, children, isPaper, defaultExpanded, loading }) => (
  <div className={classes.expandableRoot}>
    {isPaper ? (
      <Paper className={classes.paperRoot} elevation={1}>
        <Typography className={classes.paperTitle} variant="h6">
          {title && title.toUpperCase()}
        </Typography>
        <Typography component="p">
          {loading ? <Loading /> : <div className={classes.content}>{children}</div>}
        </Typography>
      </Paper>
    ) : (
      <ExpansionPanel defaultExpanded={defaultExpanded}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ borderBottom: '1px solid #333' }}
        >
          <Typography variant="h6" style={{ fontWeight: '700' }}>
            {title && title.toUpperCase()}
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          {loading ? <Loading /> : <div className={classes.content}>{children}</div>}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )}
  </div>
);

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  defaultExpanded: PropTypes.bool,
  loading: PropTypes.bool,
  isPaper: PropTypes.bool,
};

PaperSheet.defaultProps = {
  isPaper: false,
  defaultExpanded: true,
  loading: false,
};

export default withStyles(styles)(PaperSheet);
