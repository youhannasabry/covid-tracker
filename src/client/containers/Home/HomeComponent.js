import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/common/PageTitle';
import Loading from '../../components/common/Loading';

class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    const { classes, loading } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className={classes.root}>
  
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
