import Image from 'next/image';
import { useEffect, useState } from 'react';
import ImgSuid from '../../../public/tes.jpg';

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden w-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${ImgSuid.src})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div
          className="text-center"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Ideas</h1>
          <p className="mt-4 text-xl">Where all our great things begin</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-white"
        style={{
          clipPath: 'polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
    </div>
  );
};

export default Banner;
