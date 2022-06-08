import React from 'react'
const MarketTrade = () => {
  const marketJson = require('../../FileService/main-trade/coins/market-trade.json')

  return (
    <div id='market-trade'>
      <div className='d-flex flex-row'>
        <p className='text-warning'>Market Trades</p>
        <p className='text-secondary text-hov ms-4'>My Trades</p>
      </div>
      <div className='d-flex flex-row justify-content-between mt-2'>
        <p className='text-secondary '>Price(USDT) </p>
        <p className='text-secondary'>Amount(BTS)</p>
        <p className='text-secondary'>Total</p>
      </div>

      {marketJson.map((object) => {
        return (
          <div className='row' key={object.id}>
            <div className='col-5'>
              <small className='text-danger'>{object.price}</small>
            </div>
            <div className='col-3'>
              <small className='ms-3'>{object.amount}</small>
            </div>
            <div className='col-4' dir='rtl'>
              <small>{object.time}</small>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MarketTrade
