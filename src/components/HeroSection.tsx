import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div id='hero-section' className="flex items-center justify-center h-screen p-6">
          <div className="w-64 h-64 relative mr-4 flex-shrink-0">
            <Image
              src="/mypic.jpg"
              alt="Hammad's Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="max-w-xl">
            <h1 className="text-[44px] font-bold">Hi, I'm Hammad!</h1>
            <p className="text-[20px] mb-2 leading-relaxed text-teal-800 font-semibold">I am a Front-end Developer.</p>
            <p className="text-[17px] mb-2 leading-relaxed pb-2 text-justify">
              With a passion for coding and a knack for problem-solving, I
              specialize in creating efficient and scalable web applications.
              I'm always eager to learn more and take on new challenges.
            </p>
            <Link
            href="#project-section"
            className="text-neutral-100 font-semibold px-5 py-3 bg-teal-800 rounded shadow hover:bg-teal-900">
            Projects
          </Link>
          </div>
        </div>
  )
}

export default HeroSection