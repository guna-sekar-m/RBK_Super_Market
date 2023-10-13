import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentSettings.module.css';

const PaymentSettings = () => (
  <div className={styles.PaymentSettings} data-testid="PaymentSettings">
    PaymentSettings Component
  </div>
);

PaymentSettings.propTypes = {};

PaymentSettings.defaultProps = {};

export default PaymentSettings;
