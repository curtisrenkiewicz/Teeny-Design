'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InspirationItem from './InspirationItem';
import ThumbnailCarousel from './ThumbnailCarousel';
import styles from '../styles/SingleItemView.module.css';

const SingleItemView = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextItem();
    } else if (e.key === 'ArrowLeft') {
      prevItem();
    }
  };

  return (
    <div className={styles.singleItemView} onKeyDown={handleKeyDown} tabIndex={0}>
      <AnimatePresence>
        <motion.div
          key={items[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InspirationItem item={items[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <div className={styles.navigation}>
        <button onClick={prevItem} aria-label="Previous Item">
          Previous
        </button>
        <button onClick={nextItem} aria-label="Next Item">
          Next
        </button>
      </div>
      <ThumbnailCarousel
        items={items}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default SingleItemView;