import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/apiConfig';
import { Product } from '../../types/product';
import Loader from '../../styles/Loader';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const navigate = useNavigate();

  // Use your `useApi` hook to fetch product data
  const {
    data: products,
    isLoading,
    isError,
  } = useApi<Product[]>(`${BASE_API_URL}`);

  // State to hold randomly selected products
  const [randomProducts, setRandomsProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  // Extract product images once data is available
  useEffect(() => {
    if (products && products.length > 0) {
      // Select 5 random products and extract their images
      const shuffled = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setRandomsProducts(shuffled);
    }
  }, [products]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === (randomProducts.length || 0) ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [randomProducts]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !randomProducts || randomProducts.length === 0) {
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

  const dotsVariants = {
    initial: { y: 0 },
    animate: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 1000, damping: 10 },
    },
  };

  // Navigation Handlers
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const handleViewProduct = () => {
    // Navigate to the product details page of the current product
    const product = randomProducts[currentIndex];
    if (product) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className="carousel max-w-full mx-auto my-8">
      <div className="carousel-images relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="relative"
          >
            {/* Image */}
            <motion.img
              src={randomProducts[currentIndex].image.url}
              className="w-full h-96 object-cover rounded-lg"
            />

            {/* Button */}
            <motion.button
              onClick={handleViewProduct}
              className="absolute bottom-4 right-4 bg-hover/30 backdrop-blur-md border border-white/50 shadow-lg text-black font-semibold px-8 py-2 rounded-lg hover:bg-hover/60 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              View
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="carousel-indicator mt-4 flex justify-center gap-2">
        {randomProducts.map((_, index) => (
          <motion.div
            key={index}
            className={`dot w-3 h-3 rounded-full bg-card ${
              currentIndex === index ? 'bg-primary' : ''
            }`}
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
