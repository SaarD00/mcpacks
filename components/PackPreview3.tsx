import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Pack1 = [
  {
    id: 1,
    name: 'In development',
    Price: '₹0',
    image: '',
    creator: '',
    download: '',
  },
]

const pack2 = [
  {
    id: 1,
    name: 'In development  ',
    Price: '₹0',
    image: '',
    creator: ' ',
    download: '',
  },
]

const PackPreview = () => {
  const router = useRouter()
  const [packs, setPacks] = useState(Pack1)
  const [packs2, setPacks2] = useState(pack2)
  return (
    <div className="flex text-white p-5 z-50 justify-center items-center">
      <div className="">
        <div className="flex justify-center">
          <motion.div
            initial={{ x: -3000 }}
            animate={{ x: 0, transition: { delay: 1.2, duration: 0.4 } }}
          >
            <p className="text-3xl  ">Top Assets</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: 0, transition: { delay: 1.9, duration: 0.4 } }}
        >
          <div className="col-auto md:inline-flex gap-10 mt-10 border-2 border-black border-t p-5 rounded-lg border-t-white/10 shadow-2xl ">
            {packs.map((pack, index) => (
              <div className="rounded-lg bg flex flex-col bg-[#171717] object-contain justify-center md:p-2 p-10 border-2 border-t border-t-black/40 border-black shadow-2xl ">
                <img className="h-52 rounded-lg  " src={pack.image} />
                <div className="flex justify-between">
                  <p className="text-lg font-semibold mt-5">{pack.name}</p>
                  <p className="text-sm font-semibold mt-6">
                    <span className="text-white/50">Creator:</span>{' '}
                    {pack.creator}{' '}
                  </p>
                </div>

                <p className="text-sm font-semibold mt-5 text-white/50">
                  Price
                </p>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold mt-2  text-white/50 ">
                    {pack.Price}
                  </p>
                  <a
                    href={pack.download}
                    className="bg-white px-5 py-2 -mx-8 text-lg hover:scale-110 transition-all duration-150 text-black rounded-full"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: 0, transition: { delay: 2.7, duration: 0.4 } }}
        >
          <div className="col md:inline-flex gap-10 mt-10 border-2 border-black border-t p-5 rounded-lg border-t-white/10 shadow-2xl ">
            {packs2.map((pack, index) => (
              <div className="rounded-lg bg flex flex-col bg-[#171717] justify-center p-10 border-2 border-t border-t-black/40 border-black shadow-2xl ">
                <img className="h-52 rounded-lg  " src={pack.image} />
                <div className="flex justify-between">
                  <p className="text-lg font-semibold mt-5">{pack.name}</p>
                  <p className="text-sm font-semibold mt-6">
                    <span className="text-white/50">Creator:</span>{' '}
                    {pack.creator}{' '}
                  </p>
                </div>

                <p className="text-sm font-semibold mt-5 text-white/50">
                  Price
                </p>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold mt-2  text-white/50 ">
                    {pack.Price}
                  </p>
                  <a
                    href={pack.download}
                    className="bg-white px-5 py-2 -mx-8 text-lg hover:scale-110 transition-all duration-150 text-black rounded-full"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default PackPreview
