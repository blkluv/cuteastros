import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
        <Head>
            <title>About</title>
        </Head>
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='about__content mint__card p-4 rounded-lg w-5/6 md:w-3/5'>
                <h1 className='heading text-xl font-bold'>LUV NFT</h1>
                <p className='body-font mt-4'>LUV NFT built a tokenopoly game on top of a social media platform
                that allows users to donate, buy and sell NFTs offline, online or in our metaverse.
                 </p>
                <div>
                    <p className='mt-6 body-font'>made with ❤️ by <a href="https://luvnft.com" target="_blank" rel="noopener noreferrer">@luvnft</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default about