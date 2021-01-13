import React from 'react'
import Head from 'next/head'
import HomePage from '../components/HomePage'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>RickDev</title>
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default Home
