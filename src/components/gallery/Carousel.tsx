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

  return (
    <Slider {...settings} className="m-0 p-0">
      {imagesToShow.map((image, index) => (
        <div key={index} className="m-0 p-0 carousel-slide mb-0">
          <div className="w-full h-[720px] overflow-hidden flex items-center justify-center transform: matrix(1, 0, 0, 1, 3.5, 0)">
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
