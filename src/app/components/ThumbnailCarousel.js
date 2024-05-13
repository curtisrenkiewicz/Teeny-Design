'use client';

import { motion } from 'framer-motion';
import styles from '../styles/ThumbnailCarousel.module.css';

const ThumbnailCarousel = ({ items, currentIndex, setCurrentIndex }) => {
  return (
    <motion.div className={styles.carousel}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={`${styles.thumbnail} ${
            index === currentIndex ? styles.active : ''
          }`}
          onClick={() => setCurrentIndex(index)}
          aria-label={`View ${item.title}`}
          tabIndex={index === currentIndex ? 0 : -1}
        >
          <img src={item.thumbnailImage} alt={item.title} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ThumbnailCarousel;