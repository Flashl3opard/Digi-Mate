// src/ImageBox.js

const ImageBox = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-96 h-96 overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110 blur-sm hover:blur-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
