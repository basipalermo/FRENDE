import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherChart = ({ data }) => {
  return (
    <ResponsiveContainer width="85%" height={300} style={{ margin: '10px'}}>
      <LineChart data={data}>
        <XAxis dataKey="dt_txt" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
