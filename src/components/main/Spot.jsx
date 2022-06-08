import React from 'react'
// background-color: rgb(36, 41, 48)

const Spot = () => {
  return (
    <div className='d-flex flex-column ' id='spot-part' data-testid='spot'>
      <div className='d-flex flex-row justify-content-between'>
        <div
          className='d-flex justify-content-center  align-items-center'
          id='spot-text'
        >
          <p>Spot</p>
        </div>
        <div className='' id='spot-x'>
          <a href='#'>Margin</a>
          <small className='ms-1 badge bg-warning text-black'>10X</small>
          <p className='fa fa-ellipsis-v btn text-secondary' />
        </div>
      </div>
      <div id='spot'>
        <div className='btn-group d-flex d-lg-none p-4' role='group'>
          <input
            type='radio'
            class='btn-check'
            name='btnradio'
            id='Buy-btn'
            autocomplete='off'
            checked
          />
          <label class='btn btn-outline-success' for='Buy-btn'>
            BUY
          </label>

          <input
            type='radio'
            class='btn-check'
            name='btnradio'
            id='Sell-btn'
            autocomplete='off'
          />
          <label class='btn btn-outline-danger' for='Sell-btn'>
            SELL
          </label>
        </div>

        <div className='d-flex flex-row align-items-center pt-3'>
          <p className='text-warning ms-3'>Limit</p>
          <p className='text-hov ms-3'>Markets</p>
          <p className='text-hov ms-3'>
            Stop-limit <span className='fa fa-sort-down' />
          </p>
          <p className='ms-3 fa fa-exclamation-circle' />
        </div>
        <div className='row'>
          <div className='col-12 col-lg-6 p-2'>
            <div className='d-flex flex-row justify-content-between '>
              <small className='text-secondary'>Avbl</small>
              <small>-USDT</small>
            </div>
            <div className='input-group spot-group align-items-center mt-3'>
              <div className='input-group-prepend'>
                <span className='ms-2'>Price</span>
              </div>
              <input
                type='text'
                className='form-control spot-input'
                dir='rtl'
                value='37987.35'
              />
              <div className='input-group-append'>
                <span className='ms-2'>USDT</span>
              </div>
            </div>
            <div className='input-group spot-group align-items-center mt-3'>
              <div className='input-group-prepend'>
                <span className='ms-2'>Amount</span>
              </div>
              <input
                type='text'
                className='form-control spot-input'
                dir='rtl'
                value='5.88710'
              />
              <div className='input-group-append'>
                <span className='ms-2'>BTC</span>
              </div>
            </div>
            <div className='loginbtn btn btn-secondary'>
              <p>
                <span className='text-warning'>LogIn</span> or{' '}
                <span className='text-warning'>Refister Now</span>
              </p>
            </div>
          </div>

          <div className='col-12 col-lg-6 d-none d-lg-grid p-2'>
            <div className='d-flex flex-row justify-content-between'>
              <small className='text-secondary'>Avbl</small>
              <small>-BTC</small>
            </div>
            <div className='input-group spot-group align-items-center mt-3'>
              <div className='input-group-prepend'>
                <span className='ms-2'>Price</span>
              </div>
              <input
                type='text'
                className='form-control spot-input'
                dir='rtl'
                value='379787.35'
              />
              <div className='input-group-append'>
                <span className='ms-2'>USDT</span>
              </div>
            </div>
            <div className='input-group spot-group align-items-center mt-3'>
              <div className='input-group-prepend'>
                <span className='ms-2'>Amount</span>
              </div>
              <input
                type='text'
                className='form-control spot-input'
                dir='rtl'
                value=''
              />
              <div className='input-group-append'>
                <span className='ms-2'>BTC</span>
              </div>
            </div>
            <div className='loginbtn btn btn-secondary'>
              <p>
                <span className='text-warning'>LogIn</span> or{' '}
                <span className='text-warning'>Refister Now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spot
