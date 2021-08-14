import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import styles from './style';

const Info = ({ classes, label, value, grid, type = 'text', title, color, right, external, component, spacing }) => {
  return (
    <Grid direction="row" alignItems="center" className={classes.root} spacing={spacing} md={grid} container>
      <Grid md={4} xs={6} className={classes.label} item>
        <Typography
          gutterBottom
          variant="subtitle1"
          style={{ fontWeight: '500', lineHeight: '20px' }}
        >
          {label && label.toUpperCase()}
        </Typography>
      </Grid>

      <Grid
        md={8}
        xs={6}
        className={classes.value}
        item
        style={right ? { textAlign: 'right' } : {}}
      >
        {type === 'link' ? (
          external ? (
            <a href={value} target="_blank">
              <Typography gutterBottom variant="body1">
                {title}
              </Typography>
            </a>
          ) : (
            <NavLink className={classes.link} to={value}>
              <Typography gutterBottom variant="body1">
                {title}
              </Typography>
            </NavLink>
          )
        ) : (
          ''
        )}
        {type === 'chip' && <Chip color={color} label={value} className={classes.chip} />}
        {type !== 'chip' && type !== 'link' && (
          <Typography gutterBottom variant="body2">
            {value}
          </Typography>
        )}
        {component && component}
      </Grid>
    </Grid>
  );
};
Info.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  grid: PropTypes.number,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Info.defaultProps = {
  grid: 6,
  external: false,
};
export default withStyles(styles, { withTheme: true })(Info);
