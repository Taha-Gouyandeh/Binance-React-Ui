import React from 'react'
import MarketTrade from './MarketTrade'
const SearchPart = () => {
  const coinJson = require('../../FileService/main-trade/coins/coin-name.json')

  //  #region  change text color for negative and positive
  const condition = (con) => {
    if (con === 'positive') {
      return 'text-success'
    } else {
      return 'text-danger'
    }
  }
  // #endregion

  return (
    <div data-testid='search-part'>
      <div id='market-coin'>
        <div className='d-flex flex-row justify-content-center p-2'>
          <div className='input-group input-group-sm w-100' id='search-group'>
            <div className='input-group-prepend'>
              <span className='fa fa-search text-secondary ms-2' />
            </div>
            <input
              id='search-input'
              type='text'
              className='form-control'
              placeholder='Search'
            />
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around align-items-center mt-2'>
          <p className='fa fa-star ' />
          <p className='text-hov'> BUSD </p>
          <p className='text-hov'> USDT </p>
          <p className='text-hov'> BNB </p>
          <p className='text-warning text-hov'> BTC </p>
          <p className='text-hov'>
            ALTS <span className='fa fa-sort-down' />
          </p>
          <p className='text-hov'>
            FIAT <span className='fa fa-sort-down' />
          </p>
        </div>
        <div className='p-2'>
          <div className='d-flex flex-row justify-content-between mt-2'>
            <p className='text-secondary ms-3'>Pair </p>
            <p className='text-secondary ms-5'>Price</p>
            <p className='text-secondary'>Change</p>
          </div>
          {coinJson.map((object) => {
            return (
              <div className='row mt-1' key={object.id}>
                <div className='col-5'>
                  <span className='fa fa-star text-secondary' />
                  <small className=''>
                    {object.pair}/<span className='text-secondary'>BTC</span>
                  </small>
                </div>
                <div className='col-3' dir='rtl'>
                  <small>{object.price}</small>
                </div>
                <div className='col-4' dir='rtl'>
                  <small dir='ltr' className={condition(object.condition)}>
                    {object.change}
                  </small>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <MarketTrade />

      <div className='row p-2' id='market-activity'>
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <p>Market Activities</p>
          <span className='fa fa-angle-double-up' />
        </div>
        <div className='row mt-2'>
          <div className='col-6'>
            <p>
              RNDR <span className='text-secondary'>/BTS</span>
            </p>
            <small className='text-secondary'>14:53:42</small>
          </div>
          <div className='col-3'>
            <p className='text-danger'>-3.41%</p>
            <small>Rally</small>
          </div>
          <div className='col-3 d-flex align-items-center justify-content-end'>
            <button className='btn btn-danger'>
              <span className='fa fa-long-arrow-down' />
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <p>
              MULTI <span className='text-secondary'>/BTS</span>
            </p>
            <small className='text-secondary'>13:20:51</small>
          </div>
          <div className='col-3'>
            <p className='text-success'>+5.16%</p>
            <small>In 5 min</small>
          </div>
          <div className='col-3 d-flex align-items-center justify-content-end'>
            <button className='btn btn-success'>
              <span className='fa fa-long-arrow-up' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPart
