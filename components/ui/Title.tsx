import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl md:p-8 p-4">
      {title} <span className="text-secondary ">.</span>
    </h2>
  );
}
