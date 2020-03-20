import React from 'react';

import './CustomButton.scss';

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <button
      className={`CustomButton ${inverted ? 'CustomButton__inverted' : ''} ${
        isGoogleSignIn ? 'CustomButton__googleSignIn' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
