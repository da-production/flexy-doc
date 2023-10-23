import React from 'react'
import { leftmenu } from '../utils/data'
import { NavLink } from 'react-router-dom'
const LeftNavmenu = () => {
return (
<nav className="text-base lg:text-sm">
    <ul role="list" className="space-y-9">
        {/* <li>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">Introduction</h2>
            <ul role="list"
                className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                <li className="relative">
                    <NavLink to='/' className="left-nav-menu-a active"
                        href="/Getting started">Getting started</NavLink>
                        
                </li>
                <li className="relative">
                    <a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                        href="/docs/installation">Installation</a>
                </li>
            </ul>
        </li> */}
        {
            leftmenu.map(item=>(
                <li key={item.id}>
                    <h2 className="font-display font-medium text-slate-900 dark:text-white">{item.label}</h2>
                    <ul role="list"
                        className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        {
                            item.menu.map(subitem=>(
                                <li className="relative" key={subitem.id}>
                                    <NavLink className="left-nav-menu-a"
                                        to={subitem.id}>{subitem.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </li>
            ))
        }
    </ul>
</nav>
)
}

export default LeftNavmenu