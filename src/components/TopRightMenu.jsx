import { useState } from "react"
import LightIcon from "./svg/LightIcon"
import DarkIcon from "./svg/DarkIcon"
import SystemIcon from "./svg/SystemIcon"
import GitIcon from "./svg/GitIcon"
import HDivider from "./shared/HDivider"

const TopRightMenu = () => {
    const [toggle,setToggle]    = useState(false)
    const [version,setVersion]    = useState(false)
    
    return (
    <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <button className="text-xs leading-5 font-semibold bg-slate-400/10  rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5" id="headlessui-menu-button-:r5:" type="button" aria-haspopup="true" aria-expanded="false" data-headlessui-state>
            v1.0.0 
        <svg width={6} height={3} className="ml-2 overflow-visible" aria-hidden="true">
            <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </button>
        <HDivider />
        <div className="relative z-10" data-headlessui-state="">
            <label 
            className="sr-only"  
            >Theme</label>
            <button onClick={()=>setToggle((prev) => !prev)} className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5" type="button" >
            
            <LightIcon />
            </button>
            <ul className={`absolute  left-1/2 top-full mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5 ${!toggle ? 'hidden':''}`} >
                <li className="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 text-sky-500" id="headlessui-listbox-option-:rd:" role="option" >
                    <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                    <LightIcon />
                    </div>
                    <div className="ml-3">Light</div>
                </li>
                <li className="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 text-slate-700 dark:text-slate-400" id="headlessui-listbox-option-:re:" >
                    <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                    <DarkIcon />
                    </div>
                    <div className="ml-3">Dark</div>
                </li>
                <li className="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 text-slate-700 dark:text-slate-400" id="headlessui-listbox-option-:rf:" >
                    <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                    <SystemIcon />
                    </div>
                    <div className="ml-3">System</div>
                </li>
            </ul>
        </div>
        <a className="group" aria-label="GitHub" href="https://github.com">
            <GitIcon />
        </a>
    </div>
    )
}

export default TopRightMenu