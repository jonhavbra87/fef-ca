import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/apiConfig';
import { Product } from '../../types/product';
import Loader from '../../styles/Loader';

const Carousel = () => {
  // Use your `useApi` hook to fetch product data
  const {
    data: products,
    isLoading,
    isError,
  } = useApi<Product[]>(`${BASE_API_URL}`);

  // State to hold images of products
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  // Extract product images once data is available
  useEffect(() => {
    if (products && products.length > 0) {
      // Select 5 random products and extract their images
      const shuffled = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setImages(shuffled.map((product) => product.image.url));
    }
  }, [products]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading products for carousel.</div>;
  }

  // Variants for animations
  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: { duration: 1, when: 'beforeChildren' },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, when: 'afterChildren' },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: '#845162',
    },
  };

  const dotsVariants = {
    initial: { y: 0 },
    animate: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 1000, damping: 10 },
    },
  };

  // Navigation Handlers
  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className="carousel max-w-full mx-auto my-8">
      <div className="carousel-images relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="w-full h-96 object-cover rounded-lg"
          />
        </AnimatePresence>
        <div className="slide_direction absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left bg-primary rounded-full p-2 cursor-pointer"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right bg-primary rounded-full p-2 cursor-pointer"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot w-3 h-3 rounded-full bg-secondary ${currentIndex === index ? 'bg-plum' : ''}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? 'animate' : ''}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
