import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import '../style/Activity.scss';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const renderLegendText = (value, entry) => {
  return (
    <span style={{ 
      color: '#74798C', 
      fontFamily: 'Roboto', 
      fontSize: '14px', 
      fontWeight: '500', 
      lineHeight: '24px', 
      textAlign: 'left' 
    }}>
      {value}
    </span>
  );
};

const Activity = ({ sessions }) => {
  return (
    <div className="activity-container">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sessions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#000' }} 
            axisLine={{ stroke: '#000' }} 
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#FF0000"
            tick={{ fontSize: 12 }}
            hide
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#282D30"
            tick={{ fontSize: 12 }}
            domain={[69, 71]}
            axisLine={false}
            tickLine={false}
            interval={0}
            tickFormatter={(tick) => (Number.isInteger(tick) ? tick : '')}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            className="custom-legend"
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ top: -20, right: 10 }}
            formatter={renderLegendText}
            payload={[
              { value: 'Poids (kg)', type: 'circle', color: '#282D30' },
              { value: 'Calories brûlées (kcal)', type: 'circle', color: '#FF0000' },
            ]}
          />
          <Bar 
            yAxisId="right" 
            dataKey="kilogram" 
            fill="#282D30" 
            barSize={10} 
            radius={[10, 10, 0, 0]} 
          />
          <Bar 
            yAxisId="left" 
            dataKey="calories" 
            fill="#FF0000" 
            barSize={10} 
            radius={[10, 10, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

Activity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Activity;
