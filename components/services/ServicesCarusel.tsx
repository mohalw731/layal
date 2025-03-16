'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ServicesData } from './data';

export default function ServicesCarousel() {
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
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {ServicesData.map((service, index) => (
              <ServicesCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const ServicesCard = ({ title, description } : { title: string; description: string }) => {
  return (
    <div className='bg-primary rounded-2xl p-8 max-w-[350px] min-w-[300px] mt-4'>
      <h2 className='text-2xl text-primary font-black mb-4'>{title}</h2>
      <p className='text-tertiary'>{description}</p>
    </div>
  );
};
