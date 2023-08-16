import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
        <Head>
            <title>about blue check</title>
        </Head>
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='about__content mint__card p-4 rounded-lg w-5/6 md:w-3/5'>
                <h1 className='heading text-xl font-bold'>about blue check</h1>
                <p className='body-font mt-4'>A Blue Check NFT verifies your LUV NFT profile and gives you access to our private DAO tribe.</p>
                <div>
                    <p className='mt-6 body-font'>made with ❤️ by <a href="https://luvnft.com" target="_blank" rel="noopener noreferrer">@luvnft</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default about