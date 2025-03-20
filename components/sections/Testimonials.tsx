import React from "react";
import TestimonialsCarusel from "../Testimonials";

export default function Testimonials() {
  return (
    <div className="bg-[#F5F6F0] mb-12 md:py-20 py-10">
      <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl mb-6 md:p-8 p-4">
        Vad säger våra kunder
        <span className="text-secondary"> ?</span>
      </h2>
      <TestimonialsCarusel />
    </div>
  );
}
