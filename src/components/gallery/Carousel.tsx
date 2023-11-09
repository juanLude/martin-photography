import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  imagesToShow: { id: number; src: string; alt: string }[];
}

export default function Carousel({ imagesToShow }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  // Adjust the number of slides to show based on screen width
  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1; // Set to 1 for small screens (e.g., <= 768px)
  }

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
