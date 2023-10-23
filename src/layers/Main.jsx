import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import '../components/styles/grid.css'

const Main = () => {
  return (
    <div className='relative mx-auto  flex w-full max-w-7xl  flex-auto justify-center sm:px-2 lg:px-8 xl:px-12'>
        
        <LeftSidebar />
        <RightSidebar />
    </div>
  )
}

export default Main