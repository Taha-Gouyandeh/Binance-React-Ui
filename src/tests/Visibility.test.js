import React from 'react'
import ChartBTC from '../components/main/ChartBTC'
import Spot from '../components/main/Spot'
import PricePart from '../components/main/PricePart'
import Footer from '../components/footer/Footer'
import SearchPart from '../components/main/SearchPart'
import Head from '../components/main/Head'
import MainHeader from '../components/header/MainHeader'

import { render, screen } from '@testing-library/react'

test('Chart visibility', () => {
  render(<ChartBTC />)

  expect(screen.getByTestId('chart-detail')).toBeDefined()
})

test('Spot visibility', () => {
  render(<Spot />)

  expect(screen.getByTestId('spot')).toBeDefined()
})

test('Price visibility', () => {
  render(<PricePart />)

  expect(screen.getByTestId('price-part')).toBeDefined()
})

test('Footer visibility', () => {
  render(<Footer />)

  expect(screen.getByTestId('footer')).toBeDefined()
})
test('Search visibility', () => {
  render(<SearchPart />)

  expect(screen.getByTestId('search-part')).toBeDefined()
})

test('main-header visibility', () => {
  render(<Head />)

  expect(screen.getByTestId('main-header')).toBeDefined()
})

test('header visibility', () => {
  render(<MainHeader />)

  expect(screen.getByTestId('header')).toBeDefined()
})
