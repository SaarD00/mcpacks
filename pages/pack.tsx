import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import luna from '../assets/pack.png'
import { useRouter } from 'next/router'

const Pack: NextPage = () => {
  const router = useRouter()
  return (
    <div className="bg-[#161616] min-h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Cascade */}
      <motion.div
        initial={{ x: 3000 }}
        animate={{ x: 0, transition: { delay: 2, duration: 0.5 } }}
      >
        <div className="text-white absolute   z-50 font-product ">
          <div className="flex-col object-contain justify-center scale-90 gap-20 bg-[#000]/70 rounded-3xl p-20 items-center">
            <div className="flex justify-center items-center">
              <p className="text-5xl font-semibold">Select Your Pack</p>
            </div>
            <div className="flex object-contain justify-center   gap-20   p-20 items-center">
              <div
                onClick={() => router.push('/packs/16x')}
                className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10"
              >
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/983042116085248010/16x.png"
                />
              </div>
              <div
                onClick={() => router.push('/packs/32x')}
                className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10"
              >
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/983042116475301978/32x.png"
                />
              </div>
              <div
                onClick={() => router.push('/packs/64x')}
                className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10"
              >
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/983042116978638948/64.png"
                />
              </div>
              <div
                onClick={() => router.push('/packs/128x')}
                className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10"
              >
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/983042117385461800/128.png"
                />
              </div>
              <div
                onClick={() => router.push('/packs/256x')}
                className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10"
              >
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/983042117712629790/256x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex   justify-center -mt-16 ">
        <img
          className="w-screen   h-[760px]"
          src="https://cdn.discordapp.com/attachments/980432728178692137/980803321981993000/background_fade.png"
        />
      </div>
    </div>
  )
}

export default Pack
