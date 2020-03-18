import React from 'react';

import './CustomButton.scss';

export default function CustomButton({ children, ...otherProps }) {
  return (
    <button className="CustomButton" {...otherProps}>
      {children}
    </button>
  );
}
