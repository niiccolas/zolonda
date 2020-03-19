import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="FormInput__group">
      <input className="FormInput" onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } FormInput__label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
