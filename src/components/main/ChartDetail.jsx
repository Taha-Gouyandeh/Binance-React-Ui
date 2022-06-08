import React from 'react'
import Chart from 'react-apexcharts'
import { useQuery, gql } from '@apollo/client'

// #region Receive candle data
const EXCHANGE_RATES = gql`
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
//  #endregion

const ChartDetail = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  //  #region this option for apexchart
  const options = {
    chart: {
      id: 'chart-bar'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }
  // #endregion

  const dataBTC = data.getCandles.map(
    ({ candleId, pair, startTime, open, high, low, close }) => ({
      x: new Date(Number(startTime)),
      y: [open, high, low, close]
    })
  )

  // #region give data to Apexchart
  const series = [
    {
      data: dataBTC
    }
  ]
  // #endregion

  return (
    <div className='mixed-chart' id='btc-chart'>
      <Chart
        options={options}
        series={series}
        type='candlestick'
        height={450}
      />
    </div>
  )
}
export default ChartDetail
