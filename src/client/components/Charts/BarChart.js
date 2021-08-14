/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { COLORS } from '../../theme';

class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    const { data, keys } = this.props;
    return (
      <ResponsiveContainer aspect={2}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {keys.map((entry, index) => (
            <Bar dataKey={`${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
/*
*
*
* <PieChart width={340} height={340}>
        <Pie
          data={data}
          cx={170}
          cy={120}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
*
* */

Chart.propTypes = {
  data: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Chart;
