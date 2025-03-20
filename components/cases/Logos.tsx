import Image from 'next/image'
import React from 'react'
import logo1 from '../../public/logo1.svg'
import logo2 from '../../public/logo2.svg'
import logo3 from '../../public/logo3.svg'
import logo4 from '../../public/logo4.png'

export default function Logos() {
  return (
<main className="mt-14 mb-5">
<div className=' md:flex justify-center items-center space-x-14 hidden'>
      <Image src={logo1} width={150} height={150} className="mb-3" alt="logo1" />
      <Image src={logo2} width={180} height={100} className=" max-w-[140px] h-12" alt="logo1" />
      <Image src={logo3} width={180} height={100} className=" max-w-[140px] h-12" alt="logo1" />
      <h2  className='text-2xl font-bold text-primary leading-6 mb-1'>Gottsunda <br /> <span className='text-secondary'>allaktivitetshus</span></h2>    
        <Image src={logo4}  height={100} className=" max-w-[160px] h-12" alt="logo1" />
    </div>
</main>
  )
}
