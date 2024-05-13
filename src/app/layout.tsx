'use client';

import { useState } from 'react';
import GridView from './components/GridView';
import SingleItemView from './components/SingleItemView';
import { inspirationData } from './data/inspirationData';
import styles from './styles/Layout.module.css';

const Layout = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <html>
+      <body>
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
      </body>
    </html>
  );
};

export default Layout;