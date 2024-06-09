import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';
import '../style/Averagesession.scss';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-content">
        <p className="tooltip-text">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const AverageSession = ({ sessions }) => {
  return (
    <div className="average-session-container">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeWidth: 0 }} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFF" dot={false} activeDot={{ r: 8, stroke: '#E60000', strokeWidth: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSession.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSession;
