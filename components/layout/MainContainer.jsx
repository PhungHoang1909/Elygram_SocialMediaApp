import React from 'react'
import TopBar from './TopBar'

const MainContainer = ({ children }) => {
  return (
      <section className='flex flex-col flex-1 max-w-3xl px-4 md:px-10 lg:px-4 xl-px-20'>
        <TopBar />
      </section>
    )
}

export default MainContainer