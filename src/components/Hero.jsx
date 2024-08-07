import React from 'react'

import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3 mt-5'>
                <img src={logo} alt="logo" className='w-60 object-contain' />

                <button
                    type="button"
                    onClick={() => window.open('https://albertirgi.me/')}
                    className='black_btn font-poppins mt-1'>
                    {'</>'} albertirgi {'</>'}
                </button>
            </nav>

            <h1 className='head_text'>
                Summar<span className='orange_gradient'>AI</span>ze Article with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>

            <h2 className='desc'>
                Simplify your reading with SummarAIze, an open-source article
                summarizer that transforms lengthy articles into clear and
                concise summaries
            </h2>
        </header>
    )
}

export default Hero
