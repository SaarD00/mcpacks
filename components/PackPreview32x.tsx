import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Pack1 = [
  {
    id: 1,
    name: 'Limit',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/982318639883649095/pack.png',
    creator: 'marxiist',
    download:
      'https://www.mediafire.com/file/e1wftx2lh26omk3/%25C2%25A75L%25C2%25A78im%25C2%25A77i%25C2%25A78t_%25C2%25A78%255B%25C2%25A7732%25C2%25A7dx%25C2%25A78%255D.zip/file',
  },
  {
    id: 2,
    name: ' kestrel  ',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/982319218211028992/unknown.png',
    creator: 'Apexay',
    download:
      'https://www.mediafire.com/file/03bj0q9ys2r2puq/%2521_%25C2%25A79Kestrel_%25C2%25A7f%25C2%25A70%255B32x%255D.zip/file',
  },
  {
    id: 3,
    name: 'Homa',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/982322129016074260/unknown.png',
    creator: 'thorka ',
    download:
      'https://www.mediafire.com/file/rexj9bhay5w16yv/%2521_%25C2%25A7bEclipse_%25C2%25A78%255B%25C2%25A7f16x%25C2%25A78%255D.zip/file',
  },
  {
    id: 4,
    name: 'kaneki  ',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/982322308423237672/pack.png',
    creator: 'pavess x tripis ',
    download:
      'https://www.mediafire.com/file/8yuzermwzli1xtv/%2521_%25C2%25A7cKANEKI_%25C2%25A77%255B%25C2%25A7432%25C2%25A7cX%25C2%25A77%255D.zip/file',
  },
]

const pack2 = [
  {
    id: 1,
    name: 'tokyo  ',
    Price: '₹0',
    image:
      'https://cdn.discordapp.com/attachments/980432728178692137/982323026634895390/pack.png',
    creator: 'aakona ',
    download:
      'https://www.mediafire.com/file/8lwwd2so8uyufuw/%25C2%25A7d%25C2%25A7o%25C2%25A7lt%25C2%25A75%25C2%25A7o%25C2%25A7lo%25C2%25A79%25C2%25A7o%25C2%25A7lk%25C2%25A71%25C2%25A7o%25C2%25A7lyo_%25C2%25A78%25C2%25A7o%25C2%25A7l32x.zip/file',
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
