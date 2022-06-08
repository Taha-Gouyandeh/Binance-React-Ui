import React from 'react'

// this limit for responsive in small screen
const PricePart = ({ limit }) => {
  const sellJson = require('../../FileService/main-trade/buy-sell/sell.json')
  const buyJson = require('../../FileService/main-trade/buy-sell/buy.json')

  return (
    <div className='p-2' id='price-part' data-testid='price-part'>
      <div className='d-flex flex-row justify-content-between mt-2'>
        <div className='form-group d-flex flex-row'>
          <div className='form-check'>
            <input
              id='sell-buy-btn'
              className='d-none'
              type='radio'
              name='radio'
              checked
            />
            <label id='sell-buy-icon' for='sell-buy-btn' />
          </div>
          <div className='form-check'>
            <input id='buy-btn' className='d-none' type='radio' name='radio' />
            <label id='buy-icon' for='buy-btn' />
          </div>
          <div className='form-check'>
            <input id='sell-btn' className='d-none' type='radio' name='radio' />
            <label id='sell-icon' for='sell-btn' />
          </div>
        </div>
        <div className='d-flex flex-row '>
          <div id='custom-select-btc'>
            <select>
              <option selected value>
                {' '}
                0.01
              </option>
              <option value>0.1</option>
              <option value>1</option>
              <option value>10</option>
              <option value>50</option>
              <option value>100</option>
            </select>
          </div>
          <div>
            <p className='fa fa-ellipsis-v  btn text-white' />
          </div>
        </div>
      </div>
      <div className='d-flex flex-row justify-content-between'>
        <p className='text-secondary '>Price(USDT) </p>
        <p className='text-secondary'>Amount(BTS)</p>
        <p className='text-secondary'>Total</p>
      </div>

      {sellJson.slice(0, limit).map((object) => {
        return (
          <div className='row' key={object.id}>
            <div className='col-5'>
              <small className='text-danger'>{object.price}</small>
            </div>
            <div className='col-3 ps-4'>
              <small>{object.amount}</small>
            </div>
            <div className='col-4' dir='rtl'>
              <small>{object.total}</small>
            </div>
          </div>
        )
      })}
      <div className='mt-2 d-flex flex-row justify-content-between align-items-center'>
        <div className='ms-2 d-flex align-items-center'>
          <span>
            <h3 className=''>37,970.22</h3>
          </span>
          <small className='text-secondary ms-2'>$37,970.22</small>
        </div>
        <small className='text-secondary ms-2'>more</small>
      </div>
      {buyJson.slice(0, limit).map((object) => {
        return (
          <div className='row' key={object.id}>
            <div className='col-5'>
              <small className='text-success'>{object.price}</small>
            </div>
            <div className='col-3 ps-4'>
              <small>{object.amount}</small>
            </div>
            <div className='col-4' dir='rtl'>
              <small>{object.total}</small>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PricePart
