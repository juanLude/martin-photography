import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  imagesToShow: { id: number; src: string; alt: string }[];
  //   imagesToShow: string[];
}

export default function Carousel({ imagesToShow }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  //   const imageStyle = {
  //     width: "800px", // Set a fixed width for all images
  //     height: "auto", // Set a fixed height for all images
  //   };
  return (
    <Slider {...settings} className="m-0 p-0">
      {imagesToShow.map((image, index) => (
        <div key={index} className="m-0 p-0 carousel-slide">
          <div className="w-full h-[420px] overflow-hidden flex items-center justify-center">
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
