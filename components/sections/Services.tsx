import React from 'react'
import Title from '../ui/Title'
import ServicesCarousel from '../services/ServicesCarusel'

export default function Services() {
  return (
    <main className='bg-[#F5F6F0] mb-12 md:py-20 py-10' id='tjanster'>
      <Title title='Vad som ingår' />
      <ServicesCarousel />
    </main>
  )
}
