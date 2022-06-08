import React from 'react'
import Client from '../../Server/Client'
import { ApolloProvider, gql } from '@apollo/client'
import ChartDetail from './ChartDetail'

const ChartBTC = () => {
  //  #region get apollo client
  Client.query({
    query: gql`
      query GetCandles {
        getCandles {
          candleId
          startTime
          open
          high
          low
          close
        }
      }
    `
  }).then((result) => console.log(result))
  //  #endregion

  return (
    <ApolloProvider client={Client}>
      <div data-testid='chart-detail'>
        <ChartDetail />
      </div>
    </ApolloProvider>
  )
}

export default ChartBTC
