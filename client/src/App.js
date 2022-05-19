import React, { useState } from 'react';
import { LineChart, Line, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_API_SECRET, {
  apiUrl: 'http://localhost:4000/cubejs-api/v1',
});

export default () => {
  const [data,setData] = useState([])
  return (
    <QueryRenderer
      query={{
        measures: ['Orders.count'],
        dimensions: ['Orders.status'],
      }}
      cubejsApi={cubejsApi}
      render={({ resultSet }) => {
        if (!resultSet) {
          return 'Loading...';
        }
        return(
          <div className='Chart'>
            <h2>Chart</h2>
          <LineChart 
            width={800} 
            height={300}   
            data={resultSet.rawData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Orders.status" />
            <YAxis
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Orders.count"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          </div>
        )
      }}
    />
  );
};