import React from 'react'

const Footer = () => {
  return (
    <div id='footer' data-testid='footer'>
      <div className='form-group d-flex flex-row pt-2 text-secondary'>
        <div className='form-check footer-radio '>
          <input
            id='order'
            className='d-none'
            type='radio'
            name='footer'
            checked
          />
          <label className='text-hov' for='order'>
            Open Order(0)
          </label>
        </div>
        <div className='form-check footer-radio'>
          <input
            id='order-history'
            className='d-none'
            type='radio'
            name='footer'
          />
          <label className='text-hov' for='order-history'>
            Order History
          </label>
        </div>
        <div className='form-check footer-radio'>
          <input
            id='trade-history'
            className='d-none'
            type='radio'
            name='footer'
          />
          <label className='text-hov' for='trade-history'>
            Trade History
          </label>
        </div>
        <div className='form-check footer-radio'>
          <input
            id='fans'
            className='d-none'
            type='radio'
            name='footer'
          />
          <label className='text-hov' for='fans'>
            Funds
          </label>
        </div>
      </div>
      <div id='footer-detail'>
        <p>
          <span className='text-warning'>LogIn</span> or{' '}
          <span className='text-warning'>Refister Now</span> to trade
        </p>
      </div>
    </div>
  )
}

export default Footer
