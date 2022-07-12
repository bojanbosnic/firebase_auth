import React from 'react';
import styles from '../styles/Spinner.module.css';
 const LoadingSpinner = () => {
    return (
      <>
        <div class={styles.ldsring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
};

export default LoadingSpinner;