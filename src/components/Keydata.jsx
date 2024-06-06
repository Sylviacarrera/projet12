import React from 'react';
import PropTypes from 'prop-types';
import '../style/Keydata.scss';

const Keydata = ({ keyDatas }) => {
  return (
    <div className="keydata-container">
      {keyDatas.map((data, index) => (
        <div className="keydata-item" key={index}>
          <div className={`keydata-icon ${data.name.toLowerCase()}`}>
            <img src={data.img} alt={data.name} />
          </div>
          <div>
            <p>{data.quantity}{data.measure}</p>
            <p>{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Keydata.propTypes = {
  keyDatas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      measure: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Keydata;
