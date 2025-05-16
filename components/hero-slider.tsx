"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideProps[] = [
  {
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    title: "사람의 미와 공간의 조화",
    subtitle: "아파트 인테리어 전문 기업 디자인크림",
    buttonText: "상담 신청하기",
    buttonLink: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    title: "고급스런 디자인으로 당신의 공간을",
    subtitle: "특별한 공간 디자인을 찾아드립니다",
    buttonText: "상담 신청하기",
    buttonLink: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    title: "고급스러운 디자인 스타일",
    subtitle: "아파트 인테리어 전문 기업",
    buttonText: "상담 신청하기",
    buttonLink: "/contact"
  }
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setTransitioning(false), 500);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              quality={90}
              priority={index === 0}
            />
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl text-shadow">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl text-shadow">
                {slide.subtitle}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 mt-4">
                <Link href={slide.buttonLink}>
                  {slide.buttonText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;