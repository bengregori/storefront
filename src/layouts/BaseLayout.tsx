import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';
import styles from './BaseLayout.module.scss';

interface Props {}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;