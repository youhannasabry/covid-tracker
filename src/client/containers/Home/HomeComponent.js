import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/common/PageTitle';
import Loading from '../../components/common/Loading';

class Home extends React.Component {
  componentDidMount() {
    const { loadStatistics } = this.props;
  }

  render() {
    const { classes, loading, user } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className={classes.root}>
        <PageTitle title="COVID-19 Tracker" />

      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
