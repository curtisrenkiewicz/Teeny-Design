'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import InspirationItem from './InspirationItem';
import Modal from './Modal';
import styles from '../styles/GridView.module.css';

const GridView = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.grid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.gridItem}
            onClick={() => openModal(item)}
            aria-label={`View details for ${item.title}`}
            tabIndex={0}
          >
            <InspirationItem item={item} />
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal isOpen={true} onClose={closeModal}>
          <InspirationItem item={selectedItem} />
        </Modal>
      )}
    </motion.div>
  );
};

export default GridView;