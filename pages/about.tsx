import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import luna from '../assets/pack.png'

const About: NextPage = () => {
  return (
    <div className="bg-[#161616] min-h-screen">
      <Head>
        <title>ResourcePacksList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Cascade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transition: { delay: 1.5, duration: 10 } }}
      >
        <div className="text-white absolute h-screen lg:-mt-5 -mt-20 md:-mt-52 z-50 font-product ">
          <div className="flex-col object-contain justify-center scale-75 gap-20 bg-[#0000]/70 rounded-3xl p-20 items-center">
            <div className="flex justify-center items-center w-[80rem]">
              <p className="flex text-2xl">
                McPacks Team is a group of people who care about technology and
                this is our first project that contains Minecraft Resourcepacks
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="md:inline-flex hidden  justify-center -mt-16 ">
        <img
          className="w-screen   h-[760px]"
          src="https://cdn.discordapp.com/attachments/980432728178692137/980803321981993000/background_fade.png"
        />
      </div>
      <div className="text-[#161616] lg:hidden h-screen bg-[#161616] mt-[36rem]">
        e
      </div>
    </div>
  )
}

export default About
