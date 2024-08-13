import React from 'react';
import styles from '../../styles/highlightsection.module.css';

const HighlightsSection = () => {
  return (
    <section className={styles.highlight}>
      <div className={styles['highlight-content']}>
        <div className={styles['highlight-item']}>
          <h2 className={styles['highlight-number']}>25,505</h2>
          <p className={styles['highlight-text']}>Housing units delivered</p>
        </div>
        <div className={styles['highlight-item']}>
          <h2 className={styles['highlight-number']}>127,525</h2>
          <p className={styles['highlight-text']}>Impacted Beneficiaries</p>
        </div>
        <div className={styles['highlight-item']}>
          <h2 className={styles['highlight-number']}>178,536</h2>
          <p className={styles['highlight-text']}>Estimated Jobs Created</p>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
