import React from 'react'
import GetStarted from '../pages/GetStarted'
import { Outlet } from 'react-router-dom'

const RightSidebar = () => {
    return (
        <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
            <Outlet />
        </div>
    )
}

export default RightSidebar