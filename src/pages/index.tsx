import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import HomePage from './HomePage'

const Home: React.FC = () => {
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  const [loading, setLoading] = useState(true)
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
