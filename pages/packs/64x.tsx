import { NextPage } from 'next'
import Header from '../../components/Header'
import PackPreview from '../../components/PackPreview3'

const Pack: NextPage = () => {
  return (
    <div className="bg-[#161616] min-h-screen">
      <Header />
      <PackPreview />
    </div>
  )
}

export default Pack
