import React, { useContext } from 'react'
import HeaderContext from '../context/HeaderContext'

// To make the menu responsive when hiding the main menu
// This menu is entered from the right

const NavigationR = () => {
  // menu detail
  const context = useContext(HeaderContext)

  return (
    <div className='d-grid d-lg-none'>
      {/* This is a check box to find out if the menu is open or closed */}
      <input id='menu-right' className='d-none' type='checkbox' />
      <div
        id='navbar-navigation-right'
        className='d-flex flex-column text-white'
      >
        <label
          for='menu-right'
          className='text-white pointer fa fa-close m-3'
          dir='rtl'
        />
        <button className='btn text-hov text-white '>LogIn</button>
        <button className='btn btn-warning p-2 mt-2'>Register</button>

        {/* in larg display we dont need */}
        <div className='d-flex d-lg-none flex-column border-bottom'>
          <button
            className='btn-right-nav btn d-flex  flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#buyCripto'
            role='button'
            aria-expanded='false'
            aria-controls='buyCripto'
          >
            <p>
              <span className='fa fa-bitcoin' /> Buy Crypto{' '}
              <span className='badge bg-warning text-black'>EUR</span>
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='buyCripto'>
            {context.buycryptoJson.map((object) => {
              return (
                <div className='btn-right-nav btn d-flex mt-1 ms-4' key={object.id}>
                  {object.title}
                </div>
              )
            })}
          </div>
          <button className='btn-right-nav btn d-flex flex-row justify-content-between '>
            <p>
              <span className='fa fa-bar-chart' /> Markets
            </p>
          </button>
          <button
            className='btn-right-nav btn d-flex flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#tradeR'
            role='button'
            aria-expanded='false'
            aria-controls='tradeR'
          >
            <p>
              <span className='fa fa-bandcamp' /> Trade
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='tradeR'>
            {context.tradeJson.map((object) => {
              return (
                <div className='btn-right-nav btn d-flex mt-1 ms-4' key={object.id}>
                  {object.title}
                </div>
              )
            })}
          </div>
          <button
            className='btn-right-nav btn d-flex flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#derivarivesR'
            role='button'
            aria-expanded='false'
            aria-controls='derivarivesR'
          >
            <p>
              <span className='fa fa-window-restore' /> Derivarives
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='derivarivesR'>
            {context.derivarivesJson.map((object) => {
              return (
                <div className='btn-right-nav btn d-flex mt-1 ms-4' key={object.id}>
                  {object.title}
                </div>
              )
            })}
          </div>
          <button
            className='btn-right-nav btn d-flex flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#earnR'
            role='button'
            aria-expanded='false'
            aria-controls='earnR'
          >
            <p>
              <span className='fa fa-square' /> Earn
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='earnR'>
            {context.earnJson.map((object) => {
              return (
                <div className='btn-right-nav btn d-flex mt-1 ms-4' key={object.id}>
                  {object.title}
                </div>
              )
            })}
          </div>
          <button
            className='btn-right-nav btn d-flex flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#financeR'
            role='button'
            aria-expanded='false'
            aria-controls='financeR'
          >
            <p>
              <span className='fa fa-pie-chart' /> Finance
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='financeR'>
            {context.financeJson.map((object) => {
              return (
                <div className='btn-right-nav btn d-flex mt-1 ms-4' key={object.id}>
                  {object.title}
                </div>
              )
            })}
          </div>
          <button className='btn-right-nav btn d-flex flex-row justify-content-between '>
            <p>
              <span className='fa fa-bar-chart' /> NFT{' '}
              <span className='badge bg-warning text-black'>New</span>
            </p>
          </button>
          <button
            className='btn-right-nav btn d-flex flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#guideR'
            role='button'
            aria-expanded='false'
            aria-controls='guideR'
          >
            <p>
              <span className='fa fa-glide' /> Guide
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='guideR'>
            <div className='btn-right-nav btn d-flex mt-1 ms-4'>Tutorial</div>
          </div>
          <button
            className='btn-right-nav btn d-flex flex-row justify-content-between mt-2'
            data-bs-toggle='collapse'
            href='#productR'
            role='button'
            aria-expanded='false'
            aria-controls='productR'
          >
            <p>
              <span className='fa fa-th' /> Product
            </p>
            <span className='fa fa-sort-down' />
          </button>
          <div class='collapse' id='productR'>
            {context.squareJson.map((object) => {
              return (
                <div className='btn-right-nav btn d-flex mt-1 ms-4' key={object.id}>
                  {object.title}
                </div>
              )
            })}
          </div>
        </div>
        <div className='d-flex flex-column '>
          <button className='btn-right-nav btn d-flex flex-row justify-content-between '>
            <p>
              <span className='fa fa-download' /> Download
            </p>
          </button>
          <button className='btn-right-nav btn d-flex flex-row justify-content-between '>
            <p>
              <span className='fa fa-globe' /> English
            </p>
          </button>
          <button className='btn-right-nav btn d-flex flex-row justify-content-between '>
            <p>
              <span className='fa fa-dollar' /> USD
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavigationR
