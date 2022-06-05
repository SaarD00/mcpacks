import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt2 } from 'react-icons/hi'

function Header() {
  const router = useRouter()
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0, transition: { duration: 1, delay: 0.5 }, zIndex: 5 }}
    >
      <div className="bg-[#0000]/50 font-product brightness-100 border-b  flex justify-between border-white/10 shadow-sm z-[100] sticky top-0 p-5 text-white">
        <div className="flex  gap-20">
          <div onClick={() => router.push('/')} className="flex flex-shrink-0 ">
            <img
              className="h-15 flex flex-shrink-0 w-20 hover:scale-110 cursor-pointer transition-all duration-150"
              src="https://cdn.discordapp.com/attachments/980432728178692137/980443801216770098/packs_logo.png"
            />
          </div>
          <div className="border-b-2 cursor-pointer  px-2 rounded-sm hover:scale-125 transition-all duration-200 border-white/0 hover:border-white">
            <Link href="/pack">
              <p className="">PACKS</p>
            </Link>
          </div>
          <div className="border-b-2 px-2 rounded-sm hover:scale-125 transition-all duration-200 border-white/0 hover:border-white">
            <p>CLIENTS</p>
          </div>
        </div>
        <Link href="/about">
          <div className="border-b-2 px-2 flex gap-10 rounded-sm hover:scale-125 transition-all duration-200 border-white/0 hover:border-white mr-20">
            ABOUT US
            <HiMenuAlt2 className="h-7 w-7" />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default Header
