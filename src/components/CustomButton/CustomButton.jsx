import React from 'react';

import './CustomButton.scss';

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`CustomButton ${
        isGoogleSignIn ? 'CustomButton__googleSignIn' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
