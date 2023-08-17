import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
        <Head>
            <title>Verified Utility</title>
        </Head>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='about__content mint__card p-4 rounded-lg w-5/6 md:w-3/5'>
            <h1 className='heading text-xl font-bold'>Utility</h1>
            <p className='body-font mt-4'> 
            A Blue Check NFT verifies your LUV NFT profile, making you one of the 1111 verified OGs. This NFT also grants 
            you access to our private DAO tribe metaverse where you can vote on the next emoji we sell and access to 
            upcoming exclusive member-only VIP events. Unlike a Web 2 blue check, you have the ability to sell your NFT 
            to any LUV NFT user worldwide. 
            </p>
        </div>
      </div>
    </>
  )
}

export default about