import React from 'react'
import LeftNavmenu from '../components/LeftNavmenu'

const LeftSidebar = () => {
    return (
        <div className='hidden lg:relative lg:block lg:flex-none'>
            <div className='absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden'></div>
            <div className='sticky top-[0rem] -ml-0.5 h-[calc(100vh-1rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16'>
                <LeftNavmenu />
            </div>
        </div>
    )
}

export default LeftSidebar