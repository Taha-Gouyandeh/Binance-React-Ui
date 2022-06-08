import React, { Fragment } from 'react'
import MainHead from './Head'
import PricePart from './PricePart'
import SearchPart from './SearchPart'
import Spot from './Spot'
import Footer from '../footer/Footer'
import MarketTrade from './MarketTrade'
import ChartBTC from './ChartBTC'

const Main = () => {
  return (
    <>
      <div id='main'>
        <div className='row w-100'>
          {/* display full in meduim screen */}
          <div className='col-lg-9 col-md-12'>
            <MainHead />
            <div className='row '>
              {/* display none in meduim screen */}
              <div className='col-4 d-none d-lg-grid' id='sell-buy-part'>
                <PricePart limit={15} />
              </div>

              <div className='col-lg-8 col-12'>
                <div className='row'>
                  <div className='col-12 col-md-8 col-lg-12'>
                    <div id='chart'>
                      <ChartBTC />
                    </div>
                    {/* show only on medium screen */}
                    <div className='d-none d-md-grid d-lg-none '>
                      <div className='row '>
                        <div className='col-6'>
                          <MarketTrade />
                        </div>
                        <div className='col-6'>
                          <PricePart limit={5} />
                        </div>
                      </div>
                    </div>
                    <div className='d-grid d-lg-none'>
                      <Footer />
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-12 d-none d-md-grid'>
                    <Spot />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3 d-none d-lg-grid pt-3' id='serch-side'>
            <SearchPart />
          </div>
        </div>
      </div>
      <div className='d-none d-lg-grid'>
        <Footer />
      </div>

      <div className='fixed-bottom d-grid d-md-none' id='fixed-bottom-btn'>
        <div className='d-flex flex-row p-3'>
          <button className='w-100 m-2 p-2 btn btn-success'>Buy</button>
          <button className='w-100 m-2 p-2 btn btn-danger'>Sell</button>
        </div>
      </div>
    </>
  )
}

export default Main
