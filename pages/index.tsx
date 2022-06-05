import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import luna from '../assets/pack.png'

const Home: NextPage = () => {
  return (
    <div className="bg-[#282d39]  h-screen">
      <Head>
        <title>Packs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Cascade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transition: { delay: 1.5, duration: 10 } }}
      >
        <div className="text-white absolute h-screen -mt-5 z-50 font-product ">
          <div className="flex-col object-contain justify-center scale-75 gap-20 bg-[#0000]/70 rounded-3xl p-20 items-center">
            <div className="flex justify-center items-center">
              <p className="text-5xl font-semibold">Recommended Packs</p>
            </div>
            <div className="flex object-contain justify-center  gap-20   p-20 items-center">
              <div className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10">
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/980807436850061403/unknown.png"
                />
                <p className="text-5xl font-semibold">LUNA 16X</p>
              </div>
              <div className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10">
                <img
                  className="rounded-2xl"
                  src="https://media.discordapp.net/attachments/980432728178692137/980807484400865290/pack.png"
                />
                <p className="text-5xl font-semibold">AQUARI V2</p>
              </div>
              <div className="flex hover:scale-110  transition-all duration-150 ease-in-out cursor-pointer  flex-col items-center space-y-10">
                <img
                  className="rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/980432728178692137/980808033598832641/pack.png"
                />
                <p className="text-5xl  font-semibold">1M WalliFault</p>
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

export default Home
