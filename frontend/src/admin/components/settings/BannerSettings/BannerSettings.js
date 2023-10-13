import React from 'react';
import PropTypes from 'prop-types';
import styles from './BannerSettings.module.css';

const BannerSettings = () => (
  <div className={styles.BannerSettings} data-testid="BannerSettings">
    BannerSettings Component
  </div>
);

BannerSettings.propTypes = {};

BannerSettings.defaultProps = {};

export default BannerSettings;
