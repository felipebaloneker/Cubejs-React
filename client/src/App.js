import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
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
          <LineChart 
            width={600} 
            height={400}       
            margin={{
            top: 10,

          }} data={resultSet.rawData()}>
          <XAxis dataKey="Orders.status" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="Orders.count"
            stroke="#8884d8"
          />
          <Line type="monotone" dataKey="Orders.status" stroke="#82ca9d" />
          </LineChart>
        )
      }}
    />
  );
};