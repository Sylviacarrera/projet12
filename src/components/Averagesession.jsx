import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle
} from 'recharts';
import '../style/Averagesession.scss';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          fontSize: '8px',
          fontWeight: '500',
          textAlign: 'center',
          lineHeight: '24px',
          fontStyle: 'normal',
          width: '39px',
          height: '25px',
          borderColor: 'transparent',
        }}
      >
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={700}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array
};

const AverageSession = ({ sessions }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="average-session-container">
      <LineChart data={sessions} width={500}
        height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ dy: 20 }} tickMargin={-20} />
        <YAxis hide={true} padding={{ top: 80, bottom: 40 }} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} wrapperStyle={{ outline: 'none' }} />
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          stroke="#FFFFFF"
          strokeWidth={2}
          activeDot={{ r: 4 }}
          legendType="none"
        />
      </LineChart>
    </ResponsiveContainer>
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
