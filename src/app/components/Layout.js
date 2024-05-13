'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GridView from './GridView';
import SingleItemView from './SingleItemView';
import { inspirationData } from '../data/inspirationData';
import styles from '../styles/Layout.module.css';

const Layout = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <button onClick={() => setViewMode('grid')}>Grid View</button>
        <button onClick={() => setViewMode('single')}>Single Item View</button>
      </header>
      <main className={styles.main}>
        {viewMode === 'grid' ? (
          <GridView items={inspirationData} />
        ) : (
          <SingleItemView items={inspirationData} />
        )}
      </main>
      <footer className={styles.footer}>
        {/* Add your footer content */}
      </footer>
    </div>
  );
};

export default Layout;