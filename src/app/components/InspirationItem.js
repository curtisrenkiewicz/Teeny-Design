'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/InspirationItem.module.css';

const InspirationItem = ({ item }) => {
  const [likes, setLikes] = useState(item.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <motion.div className={styles.inspirationItem}>
      <div className={styles.imageContainer}>
        {item.image ? (
          <img src={item.image} alt={item.title} />
        ) : (
          <div className={styles.imagePlaceholder} />
        )}
      </div>
      <div className={styles.itemDetails}>
        <h3>{item.title}</h3>
        <p>
          By{' '}
          <Link href={item.authorLink} target="_blank" rel="noopener noreferrer">
            {item.authorName}
          </Link>
        </p>
        <button
          className={styles.likeButton}
          onClick={handleLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          {isLiked ? '❤️' : '🤍'} {likes}
        </button>
        <Link
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sourceLink}
        >
          View Source
        </Link>
      </div>
    </motion.div>
  );
};

export default InspirationItem;