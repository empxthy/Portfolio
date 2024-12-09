
import React from 'react';
import Snowfall from 'react-snowfall';

const speed= [0.5, 2.0]

const SnowfallEffect: React.FC = () => {
  return (
    <div>
      <Snowfall 
        snowflakeCount={150}
        speed={speed}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
      />
    </div>
  );
}

export default SnowfallEffect;
