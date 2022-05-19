cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    status: {
      sql: `status`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
