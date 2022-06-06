import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Pack1 = [
  {
    id: 1,
    name: 'Amethyst',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/981932779791065088/pack.png',
    creator: 'looshy',
    download: 'https://bit.ly/38UWncb',
  },
  {
    id: 2,
    name: ' Deep Cyan ',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/981933946990379038/pack.png',
    creator: 'Apexay',
    download: 'https://bit.ly/38UWncb',
  },
  {
    id: 3,
    name: 'Aqauri',
    Price: '₹0',
    image:
      'https://media.discordapp.net/attachments/980432728178692137/980807484400865290/pack.png',
    creator: 'Blurpy ',
    download:
      'https://www.mediafire.com/file/rexj9bhay5w16yv/%2521_%25C2%25A7bEclipse_%25C2%25A78%255B%25C2%25A7f16x%25C2%25A78%255D.zip/file',
  },
  {
    id: 4,
    name: 'Luna ',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/980807436850061403/unknown.png',
    creator: 'Damify',
  },
]

const pack2 = [
  {
    id: 1,
    name: 'Novis ',
    Price: '₹0',
    image:
      'https://media.discordapp.net/attachments/980432728178692137/982274534839296080/pack.png',
    creator: 'ySeb ',
    download:
      'https://www.mediafire.com/file/1d6fpc4ll0m9n7e/%25C2%25A7bNovis_16x_%25C2%25A7aDefault_Edit_%25C2%25A79.zip/file',
  },
  {
    id: 2,
    name: 'Spirit  ',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/982274148703293460/pack.png',
    creator: 'Krispy  ',
    download:
      'https://www.mediafire.com/file/wag1560nwplyvdv/%25C2%25A75Spirit_16x.zip/file',
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
          <div className="flex gap-10 mt-10 border-2 border-black border-t p-5 rounded-lg border-t-white/10 shadow-2xl ">
            {packs.map((pack, index) => (
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

        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: 0, transition: { delay: 2.7, duration: 0.4 } }}
        >
          <div className="flex gap-10 mt-10 border-2 border-black border-t p-5 rounded-lg border-t-white/10 shadow-2xl ">
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
