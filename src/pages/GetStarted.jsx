const GetStarted = () => {
    return (
        <article>
            <header className="mb-9 space-y-1">
                <p className="heading-xs">Introduction</p>
                <h1 className="heading-1">Getting started</h1>
            </header>
            <div className='mb-9 space-y-3'>
                <p className='paragraph'>
                Developers often encounter challenges when working with CSS grid layouts and Flexbox, especially when they are not used correctly. Common problems include:
                </p>
                <p className='paragraph'><strong>Layout Complexity:</strong> Without a proper framework, creating complex layouts can become a time-consuming and error-prone task, resulting in inconsistent designs.</p>
                <p className='paragraph'><strong>Responsive Design Difficulty:</strong> Ensuring that your layouts are responsive across various screen sizes can be challenging, leading to a poor user experience on different devices.</p>
                <p className='paragraph'><strong>Inefficient Code:</strong> Writing and maintaining extensive CSS code to manage layouts can become inefficient, difficult to scale, and prone to bugs.</p>
            </div>
            <div className='mb-9 space-y-3'>
            <h3 className='heading-3'>FlexiGrid - Empowering Developers</h3>
                <p className='paragraph'><strong className='underline underline-offset-[2px] decoration-sky-500 decoration-[4px]'>FlexiGrid</strong> is designed to address these challenges and simplify the process of creating stunning grid-based layouts. Here's how FlexiGrid provides solutions:</p>
                <p className='paragraph'><strong>Simplified Layout Creation:</strong> FlexiGrid streamlines the creation of grid-based layouts by combining the power of Flexbox and Grid, offering a straightforward and intuitive way to arrange content in rows and columns.</p>
                <p className='paragraph'><strong>Built-in Responsiveness:</strong> FlexiGrid is inherently responsive, ensuring that your layouts adapt seamlessly to different screen sizes. You can easily design for mobile, tablet, and desktop without writing complex media queries.</p>
                <p className='paragraph'><strong>Clean and Maintainable Code:</strong> With FlexiGrid, you can write clean, concise, and organized CSS code. This results in improved maintainability and code that's easier to understand, reducing the risk of errors and speeding up development.</p>
                <p className='paragraph'>By choosing FlexiGrid, developers can overcome the challenges associated with grid and Flexbox layout design, enabling them to create beautiful, responsive, and efficient web layouts more efficiently and effectively. Let's dive into the details of how to get started with FlexiGrid and unlock its potential for your projects.</p>
            </div>
            <hr className='divide-y-2 mb-9' />
            <div className="max-w-none dark:text-slate-400  ">
                <p className="paragraph">Learn how to get <mark>GridSystem</mark> set up in your project in under thirty minutes or it's free. </p>
                <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 relative">
                    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                        <div className="relative overflow-hidden rounded-xl p-6">
                        <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]">
                            <defs>
                            <radialGradient cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" id=":S1:-gradient" gradientTransform="matrix(0 21 -21 0 12 3)">
                                <stop stopColor="#0EA5E9" />
                                <stop stopColor="#22D3EE" offset=".527" />
                                <stop stopColor="#818CF8" offset={1} />
                            </radialGradient>
                            <radialGradient cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" id=":S1:-gradient-dark" gradientTransform="matrix(0 21 -21 0 16 7)">
                                <stop stopColor="#0EA5E9" />
                                <stop stopColor="#22D3EE" offset=".527" />
                                <stop stopColor="#818CF8" offset={1} />
                            </radialGradient>
                            </defs>
                            <g className="dark:hidden">
                            <circle cx={12} cy={12} r={12} fill="url(#:S1:-gradient)" />
                            <path d="m8 8 9 21 2-10 10-2L8 8Z" fillOpacity="0.5" className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <g className="hidden dark:inline">
                            <path d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z" fill="url(#:S1:-gradient-dark)" stroke="url(#:S1:-gradient-dark)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                        <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                            <a href="/">
                            <span className="absolute -inset-px rounded-xl" />Installation </a>
                        </h2>
                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">Step-by-step guides to setting up your system and installing the library.</p>
                        </div>
                    </div>
                    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                        <div className="relative overflow-hidden rounded-xl p-6">
                        <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]">
                            <defs>
                            <radialGradient cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" id=":S2:-gradient" gradientTransform="matrix(0 21 -21 0 20 3)">
                                <stop stopColor="#0EA5E9" />
                                <stop stopColor="#22D3EE" offset=".527" />
                                <stop stopColor="#818CF8" offset={1} />
                            </radialGradient>
                            <radialGradient cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" id=":S2:-gradient-dark" gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)">
                                <stop stopColor="#0EA5E9" />
                                <stop stopColor="#22D3EE" offset=".527" />
                                <stop stopColor="#818CF8" offset={1} />
                            </radialGradient>
                            </defs>
                            <g className="dark:hidden">
                            <circle cx={20} cy={12} r={12} fill="url(#:S2:-gradient)" />
                            <g className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]" fillOpacity="0.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
                                <path d="M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
                                <path d="M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
                                <path d="M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
                            </g>
                            </g>
                            <g className="hidden dark:inline" fill="url(#:S2:-gradient-dark)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
                            <path d="M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z" />
                            </g>
                        </svg>
                        <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                            <a href="/">
                            <span className="absolute -inset-px rounded-xl" />Architecture guide </a>
                        </h2>
                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">Learn how the internals work and contribute.</p>
                        </div>
                    </div>
                    <div className="z-0 hidden md:block">
                        <div className="absolute -left-12 -right-12 -top-4 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -left-4 -top-12 bottom-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -right-4 -top-12 bottom-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -top-12 right-10 mt-px flex h-8 items-end overflow-hidden">
                            <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                            </div>
                        </div>
                        <div className="absolute -right-28 bottom-0 flex h-8 items-end overflow-hidden">
                            <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default GetStarted