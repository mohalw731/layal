'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import card1 from '../../public/card1.jpeg';
import card2 from '../../public/card2.png';
import card3 from '../../public/card3.png';
import card4 from '../../public/card4.png';
import card5 from '../../public/card5.png';
// import card6 from '../../public/card6.jpeg';
import Title from '../ui/Title';

const images = [card1, card2, card3, card4, card5, ];

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
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {images.map((image, index) => (
              <CaseCard key={index} image={image} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const CaseCard = ({ image } : any) => {
  return (
    <div className="md:max-w-[500px] md:min-w-[400px] max-w-[250px] border-10 border-[#F5F6F0] rounded-2xl overflow-hidden">
      <Image src={image} alt="" className="rounded-xl" />
    </div>
  );
};