import React from 'react'

// top of main part

const MainHead = () => {
  return (
    <div className='row pt-3' data-testid='main-header'>
      <div className='d-flex  justify-content-between'>
        <div className='d-flex'>
          <div className='ms-2'>
            <h3>BTC/USDT</h3>
            <a href='#' className='text-secondary '>
              Bitcoin Price
            </a>
          </div>
          <div className='ms-3'>
            <div className='bg-secondary' id='separate' />
          </div>
          <div className='d-flex flex-row flex-wrap'>
            <div className='ms-3'>
              <p>38,540.01</p>
              <small>38,540.01</small>
            </div>
            <div className='ms-3'>
              <p>
                <small className='text-secondary'>24h Change</small>
              </p>
              <small className='text-danger'>-650 -1.44%</small>
            </div>
            <div className='ms-3'>
              <p>
                <small className='text-secondary'>24h High</small>
              </p>
              <small>39,210.04</small>
            </div>
            <div className='ms-3'>
              <p>
                <small className='text-secondary'>24h Low</small>
              </p>
              <small>38,125.04</small>
            </div>
            <div className='ms-3'>
              <p>
                <small className='text-secondary'>24h Volume(BTC)</small>
              </p>
              <small>37,055.04</small>
            </div>
            <div className='ms-3'>
              <p>
                <small className='text-secondary'>24h Volume(USDT)</small>
              </p>
              <small>1,429,342,181.74</small>
            </div>
          </div>
        </div>
        {/* in the medium screen display none */}
        <div className='d-none d-md-flex align-items-center '>
          <p className='text-secondary pointer me-2'>
            {' '}
            <span className='fa fa-play-circle' />
            <small> Spot Tutorial</small>
          </p>
        </div>
      </div>
      <div className='horizontal-seprator mt-2' />
    </div>
  )
}

export default MainHead
