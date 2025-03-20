'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import card1 from '../../public/card1.jpeg';
import Title from '../ui/Title';

export default function CasesCarousel() {
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
      <Title title="Skapade minnen" />
      <motion.div
        className="flex gap-4"
        animate={controls}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CaseCard key={index} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const CaseCard = () => {
  return (
    <div className="md:max-w-[500px] md:min-w-[400px] max-w-[250px] border-10 border-[#F5F6F0] rounded-2xl overflow-hidden">
      <Image src={card1} alt="" className="rounded-xl" />
    </div>
  );
};
