import React from 'react'
import TopSerach from '../components/TopSerach'
import TopRightMenu from '../components/TopRightMenu'
import { LogoColor } from '../assets/images'
import LeftNavmenu from '../components/LeftNavmenu'
import FlexyColor from '../components/svg/FlexyColor'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='sticky w-full max-w-7xl mx-auto z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-transparent'>
            <div className="mr-6 flex lg:hidden">
                <button type="button" className="relative" aria-label="Open navigation">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" className="h-6 w-6 stroke-slate-500">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                </button>
                <div style={{position: 'fixed', top: '1px', left: '1px', width: '1px', height: 0, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0, display: 'none'}} />
            </div>
            <div className='relative flex flex-grow basis-0 items-center'>
                <Link to="/" className='flex flex-row gap-3 items-center text-[20px] font-semibold'>
                <img src={LogoColor} alt="" className='h-8' />
                <span className='text-sky-500'>Flex<span className='text-slate-700'>y</span></span>
                </Link>
                <Link className='ml-5 text-slate-600' to="/about">About</Link>
            </div>
            <TopSerach />
            <TopRightMenu />
            
        </div>
        <div className='fixed lg:hidden top-0 left-0 w-full h-full bg-slate-700/80 backdrop-blur-md z-50'>
            <div className=' w-full h-full'>
                <div className='w-4/12 h-screen p-10 bg-white overflow-y-scroll'>
                    <LeftNavmenu />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header