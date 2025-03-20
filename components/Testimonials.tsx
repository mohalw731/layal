'use client';
import { Testimonials } from '../components/services/data'; // Ensure this path is correct
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {Testimonials.map((service, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                title={service.name}
                description={service.quote}
                rating={service.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        Testimonials.map((service, index) => (
          <TestimonialCard
            key={index}
            title={service.name}
            description={service.quote}
            rating={service.rating}
          />
        ))
      )}
    </div>
  );
}

const TestimonialCard = ({ title, description, rating }: { title: string; description: string; rating: number }) => {
  return (
    <div className='bg-primary rounded-2xl p-8 md:max-w-[350px] md:min-w-[300px] mt-4 shadow-lg md:mx-0 mx-5'>
      <div className="flex items-center justify-between mb-3">
        <h2 className='text-2xl text-primary font-black'>{title}</h2>
        <h3 className='text-2xl text-secondary font-bold flex gap-1 items-center'>
          <Star className='text-yellow-500 fill-amber-400' />/{rating}
        </h3>
      </div>
      <p className='text-tertiary'>{description}</p>
    </div>
  );
};