//https://syntax.tailwindui.com/
//https://tailwindcss.com/blog/2022-12-15-protocol-api-documentation-template
// https://medium.com/@gaute.meek/how-to-publish-a-js-library-to-npm-and-cdn-9d0bf9b48e11
import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Main from './Main'

const Master = () => {
    return (
        <div className='flex min-h-full bg-white dark:bg-slate-900 '>
            <div className='flex w-full flex-col'>
                <Header />
                <Hero />
                <Main />
            </div>
        </div>
    )
}

export default Master