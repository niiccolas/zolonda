import React from "react";

import "./CustomButton.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  className,
  ...otherProps
}) {
  return (
    <button
      className={`CustomButton ${
        isGoogleSignIn ? "CustomButton__googleSignIn" : ""
      } ${inverted ? "CustomButton__inverted" : ""} ${className} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
