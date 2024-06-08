import React from 'react';
import { LineChart } from '@mui/x-charts';

const MarketTrendsGraph = () => {

  return (
    <LineChart
    
      xAxis={[{ 
        scaleType: 'band',
        data: [ 2020, 2021, 2022, 2023, 2024, 2025] }]}
      
      series={[
        {
          data: [100000, 135000, 172000, 164000, 215000, 203000],
        },
      ]}
      width={1100}
      height={300}
      margin={{ left: 100, right: 50, top: 30, bottom: 30 }}
    />
  );
};

export default MarketTrendsGraph;
