import { LogoColor, LogoLight } from '../assets/images'
import CirlceBlur from '../assets/images/circle-blur-1.png'
import RightCode from '../components/RightCode'
import "../components/styles/grid.css"
const Hero = () => {
    return (
        <div className='overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem] '>
            <div className='py-16 sm:px-2 lg:relative lg:px-0 lg:py-20 light:magicpattern-1 flex flex-col items-center p-6'>
                <div className='mb-10 flex flex-col items-center justify-center'>
                    <img src={LogoColor} className='w-20 ' />
                    <span className='nline bg-gradient-to-r from-slate-800 via-sky-400 to-slate-800 bg-clip-text font-display text-5xl tracking-tight text-transparent'>Flexy</span>
                </div>
                <div className='mx-auto mb-20  grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12'>
                    <div className="relative z-10 md:text-center lg:text-left">
                        <img width="530" height="530" className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50" style={{color:'transparent'}} src={CirlceBlur} />
                        <div className="relative">
                            <p className="inline bg-gradient-to-r from-slate-800 via-slate-300 to-sky-500 bg-clip-text font-display text-5xl tracking-tight text-transparent">Unleash the Power of Flexbox and Grid!</p>
                            <p className="mt-3 text-2xl tracking-tight text-slate-400">Seamlessly merge Flexbox and Grid for stunning, responsive layouts with simplicity and precision. Elevate your web design effortlessly.</p>
                            <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                            <a className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500" href="/">Get started</a>
                            <a className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400" href="/">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <RightCode />
                </div>
            </div>
        </div>
    )
}

export default Hero