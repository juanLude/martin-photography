import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  imagesToShow: { id: number; src: string; alt: string }[];
}

export default function Carousel({ imagesToShow }: CarouselProps) {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    // Initial check
    updateSlidesToShow();

    // Listen for window resize events
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use the updated value
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="m-0 p-0">
      {imagesToShow.map((image, index) => (
        <div key={index} className="m-0 p-0 carousel-slide mb-0">
          <div className="w-full h-[480px] mt-28 overflow-hidden flex items-bottom justify-center transform: matrix(1, 0, 0, 1, 3.5, 0)">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}
