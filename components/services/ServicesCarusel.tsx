'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ServicesData } from './data';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export default function ServicesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(300); // Default card width
  const [visibleCards, setVisibleCards] = useState(1); // Number of visible cards
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile
  const controls = useAnimation();

  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleCards(3); // Show 3 cards on large screens
      } else if (screenWidth >= 768) {
        setVisibleCards(2); // Show 2 cards on medium screens
      } else {
        setVisibleCards(1); // Show 1 card on small screens
      }
      setCardWidth(screenWidth >= 768 ? 300 : 250); // Adjust card width based on screen size
      setIsMobile(screenWidth < 768); // Set isMobile based on screen width
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const scrollLeft = () => {
    const newPosition = Math.max(scrollPosition - cardWidth, 0);
    setScrollPosition(newPosition);
    controls.start({ x: -newPosition });
  };

  const scrollRight = () => {
    const maxScroll = (ServicesData.length - visibleCards) * cardWidth;
    const newPosition = Math.min(scrollPosition + cardWidth, maxScroll);
    setScrollPosition(newPosition);
    controls.start({ x: -newPosition });
  };

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      scrollRight();
    } else if (touchEnd - touchStart > 50) {
      scrollLeft();
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-5">
      <motion.div
        className="flex gap-4"
        style={{ display: 'flex', width: 'max-content' }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${visibleCards === 1 ? 'mx-auto' : ''}`}
            style={{ width: cardWidth }}
          >
            <ServicesCard title={service.title} description={service.description} icon={service.icon} />
          </div>
        ))}
      </motion.div>

      {/* Left Arrow Button */}
      {!isMobile && scrollPosition > 0 && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary mx-5 p-2 rounded-full text-primary"
        >
          <ArrowLeftIcon size={24} />
        </button>
      )}

      {/* Right Arrow Button */}
      {!isMobile && scrollPosition < (ServicesData.length - visibleCards) * cardWidth && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary mx-5 p-2 rounded-full text-primary"
        >
          <ArrowRightIcon size={24} />
        </button>
      )}
    </div>
  );
}

const ServicesCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className='bg-primary rounded-2xl p-8 md:w-[300px] w-full md:h-[250px] h-full flex flex-col justify-between'>
      <div className="flex items-center justify-between">
        <h2 className='text-lg text-primary font-black mb-4'>{title}</h2>
        <span className='text-4xl text-secondary'>{icon}</span>
      </div>
      <p className='text-tertiary flex-grow'>{description}</p>
    </div>
  );
};