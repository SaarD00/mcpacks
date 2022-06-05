import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import PackPreview from '../../components/PackPreview'

const Pack: NextPage = () => {
  return (
    <div className="bg-[#161616] min-h-screen">
      <Head>
        <title>ResourcePacksList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PackPreview />
    </div>
  )
}

export default Pack
