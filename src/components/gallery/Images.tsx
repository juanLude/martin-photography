import { ImagesProp } from "./Gallery";

const Images = ({ imagesToShow, toggle, setModalImg }: ImagesProp) => {
  return (
    <section className="image-list grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-1 mx-auto overflow-hidden w-full mt-24 ml-24">
      {imagesToShow.map((img, index) => (
        <section className="card-zoom" key={index}>
          <img
            onClick={() => {
              toggle();
              setModalImg(index);
            }}
            src={img.src}
            alt={img.alt}
            className="card-zoom-image"
          />
        </section>
      ))}
    </section>
  );
};

export default Images;
// import { useState } from "react";
// import { ImagesProp } from "./Gallery";

// const Images = ({ imagesToShow }: ImagesProp) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const openImage = (imageUrl: string) => {
//     setSelectedImage(imageUrl);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <section className="image-list grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-1 mx-auto overflow-hidden w-full">
//       {imagesToShow.map((img, index) => (
//         <section className="card-zoom" key={index}>
//           <img
//             onClick={() => openImage(img.src)}
//             src={img.src}
//             alt={img.alt}
//             className="card-zoom-image"
//           />
//         </section>
//       ))}

//       {selectedImage && (
//         <div className="image-modal-overlay">
//           <div className="image-modal">
//             <img
//               src={selectedImage}
//               alt="Original"
//               className="image-modal-content"
//             />
//             <button className="close-button" onClick={closeImage}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Images;
