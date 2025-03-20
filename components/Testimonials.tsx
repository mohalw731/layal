'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Testimonials } from '../components/services/data';
import { Star } from 'lucide-react';

export default function TestimonialsCarusel() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: ['0%', '-100%'],
        transition: { repeat: Infinity, duration: 45, ease: 'linear' },
      });
    }
  }, [isPaused, controls]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseLeave={() => setIsPaused(false)}
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-4"
        animate={controls}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {Testimonials.map((service, index) => (
              <ServicesCard key={index} title={service.name} description={service.quote} rating={service.rating} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const ServicesCard = ({ title, description , rating} : { title: string; description: string; rating: number }) => {
  return (
    <div className='bg-primary rounded-2xl p-8 max-w-[350px] min-w-[300px] mt-4'>
      <div className=" flex items-center justify-between mb-3">
      <h2 className='text-2xl text-primary font-black '>{title}</h2>
        <h3 className='text-2xl text-secondary font-bold flex gap-1 items-center'><Star className='text-yellow-500 fill-amber-400' />/{rating}</h3>
      </div>

      <p className='text-tertiary'>{description}</p>
    </div>
  );
};
