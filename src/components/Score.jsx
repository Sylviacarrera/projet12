import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../style/Score.scss';

const Score = ({ score }) => {
  const data = [
    {
      name: 'Score',
      value: score * 100,
      fill: '#FF0000',
    },
  ];

  return (
    <div className="score-container">
      <div className="score-title">Score</div>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={90 + (score * 360)} // Adjust the end angle based on the score
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-overlay"></div>
      <div className="score-content">
        <p className="score-percentage">{score * 100}%</p>
        <p className="score-text">de votre objectif</p>
      </div>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
