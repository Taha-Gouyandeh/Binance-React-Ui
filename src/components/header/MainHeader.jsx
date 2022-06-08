import React from 'react'
import NavigationR from './NavigationR'
import SecondNav from './SecondNav'
import TopHeader from './TopHeader'

const MainHeader = () => {
  return (
    <div data-testid='header'>
      <NavigationR />
      <TopHeader />
      <div className='horizontal-seprator' />

      <SecondNav />
    </div>
  )
}

export default MainHeader
