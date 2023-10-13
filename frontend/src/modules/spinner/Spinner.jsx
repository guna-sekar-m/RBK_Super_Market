import React from 'react';
import './Spinner.css';
const Spinner = () => {
  return (
    <div className="spinner-overlay my-spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
