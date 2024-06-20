import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Rectangle
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

const CustomCursor = ({ points, width, height }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[0].x}
      width={width - points[0].x}
      height={height}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
};

const AverageSession = ({ sessions }) => {
  return (
    <div className="average-session-container">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessions} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ dy: 20 }} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line type="natural" dataKey="sessionLength" stroke="#FFF" dot={false} activeDot={{ r: 8, stroke: '#E60000', strokeWidth: 8 }} />
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
