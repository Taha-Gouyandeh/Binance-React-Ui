import React, { useContext } from 'react'
import HeaderContext from '../context/HeaderContext'

const TopHeader = () => {
  // menu data
  const context = useContext(HeaderContext)

  return (
    <div>
      <div id='main-head' className='d-flex justify-content-between'>
        <div className='d-flex justify-content-between'>
          <img id='img-logo' src='/image/Binance-Logo.png' alt='' />

          {/*  only need to display on the larg screen */}
          <div className='d-none d-lg-flex align-items-center'>
            <div id='sqr-hov'>
              <div className='nav-hover'>
                <p className='ms-2'>
                  <span className='fa fa-th' />
                </p>
              </div>
              <ul id='square-menu'>
                <li className='row p-3' id='menu-square-open'>
                  {context.squareJson.map((ob) => {
                    return (
                      <div
                        className='menu-item col-md-4 col-6  col-6'
                        key={ob.id}
                      >
                        <a href='#'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <img src={ob.imageurl} />
                              <div className='ms-3'>
                                <p>{ob.title}</p>
                                <p className='text-secondary text-small'>
                                  {ob.text}
                                </p>
                              </div>
                            </div>
                            <div className=' menu-arrow d-none'>
                              <span className='fa fa-long-arrow-right' />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </li>
              </ul>
            </div>

            <div id='buycrypto-hov'>
              <div className='nav-hover'>
                <p className='ms-3'>BuyCrypto</p>
                <small>EUR</small>
                <span className='ms-1 fa fa-sort-down' />
              </div>
              <ul id='buycrypto-menu'>
                <li className='row p-3'>
                  {context.buycryptoJson.map((ob) => {
                    return (
                      <div className='menu-item col-12' key={ob.id}>
                        <a href='#'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <img src={ob.imageurl} />
                              <div className='ms-3'>
                                <p>{ob.title}</p>
                                <p className='text-secondary text-small'>
                                  {ob.text}
                                </p>
                              </div>
                            </div>
                            <div className='menu-arrow d-none'>
                              <span className='fa fa-long-arrow-right' />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </li>
              </ul>
            </div>

            <div className='nav-hover'>
              <p className='ms-3'>Markets</p>
            </div>

            <div id='Trade-hov'>
              <div className='nav-hover'>
                <p className='ms-3'>Trade</p>
                <span className='ms-1 fa fa-sort-down' />
              </div>
              <ul id='Trade-menu'>
                <li className='row p-3'>
                  {context.tradeJson.map((ob) => {
                    return (
                      <div className='menu-item col-12' key={ob.id}>
                        <a href='#'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <img src={ob.imageurl} />
                              <div className='ms-3'>
                                <p>{ob.title}</p>
                                <p className='text-secondary text-small'>
                                  {ob.text}
                                </p>
                              </div>
                            </div>
                            <div className='menu-arrow d-none'>
                              <span className='fa fa-long-arrow-right' />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </li>
              </ul>
            </div>

            <div id='derivarives-hov'>
              <div className='nav-hover'>
                <p className='ms-3'>derivarives</p>
                <span className='ms-1 fa fa-sort-down' />
              </div>
              <ul id='derivarives-menu'>
                <li className='row p-3'>
                  {context.derivarivesJson.map((ob) => {
                    return (
                      <div className='menu-item col-12' key={ob.id}>
                        <a href='#'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <img src={ob.imageurl} />
                              <div className='ms-3'>
                                <p>{ob.title}</p>
                                <p className='text-secondary text-small'>
                                  {ob.text}
                                </p>
                              </div>
                            </div>
                            <div className='menu-arrow d-none'>
                              <span className='fa fa-long-arrow-right' />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </li>
              </ul>
            </div>

            <div id='earn-hov'>
              <div className='nav-hover'>
                <p className='ms-3'>Earn</p>
                <span className='ms-1 fa fa-sort-down' />
              </div>
              <ul id='earn-menu'>
                <li className='row p-3'>
                  {context.earnJson.map((ob) => {
                    return (
                      <div className='menu-item col-6' key={ob.id}>
                        <a href='#'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <img src={ob.imageurl} />
                              <div className='ms-3'>
                                <p>{ob.title}</p>
                                <p className='text-secondary text-small'>
                                  {ob.text}
                                </p>
                              </div>
                            </div>
                            <div className='menu-arrow d-none'>
                              <span className='fa fa-long-arrow-right' />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </li>
              </ul>
            </div>

            <div id='finance-hov'>
              <div className='nav-hover'>
                <p className='ms-3'>Finance</p>
                <span className='ms-1 fa fa-sort-down' />
              </div>
              <ul id='finance-menu'>
                <li className='row p-3'>
                  {context.financeJson.map((ob) => {
                    return (
                      <div className='menu-item col-12' key={ob.id}>
                        <a href='#'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <img src={ob.imageurl} />
                              <div className='ms-3'>
                                <p>{ob.title}</p>
                                <p className='text-secondary text-small'>
                                  {ob.text}
                                </p>
                              </div>
                            </div>
                            <div className='menu-arrow d-none'>
                              <span className='fa fa-long-arrow-right' />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </li>
              </ul>
            </div>
            <div className='nav-hover'>
              <p className='ms-3'>
                NFT <small>new</small>
              </p>
            </div>
          </div>
        </div>
        <div className='d-flex flex-row'>
          <div className='d-none d-xl-flex align-items-center'>
            <p className='nav-hover me-2'>Log In</p>
            <a id='register' href='#' className='btn btn-warning me-3'>
              Register
            </a>

            <div id='downloads-hov'>
              <div className='nav-hover'>
                <p className='ms-1'>Downloads</p>
              </div>
              <ul id='downloads-menu'>
                <li className='row p-3'>
                  <img
                    className='col-12'
                    id='qr-code'
                    src='./image/qr-icon.jpg'
                  />
                  <p>Scan to Download App IOS and Android</p>
                  <button className='btn btn-warning '>
                    more download option
                  </button>
                </li>
              </ul>
            </div>

            <p className='ms-4 nav-hover'>English</p>

            <p className='ms-1'>|</p>

            <p className='ms-1 nav-hover'>USD</p>
          </div>
          <div className='d-flex flex-row align-items-center'>
            <label
              className='d-block d-xl-none pointer fa fa-2x fa-bars text-secondary'
              for='menu-right'
            />

            <img className='ms-2 img-icon' src='./image/icons/qu-icon.jpg' />

            <img
              className='ms-2 me-2 img-icon'
              src='./image/icons/setting-icon.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
