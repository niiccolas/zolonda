import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imgUrl, size }) => (
  <div className={size === 'large' ? 'MenuItem MenuItem__large' : 'MenuItem'}>
    <div
      className="MenuItem__bgImage"
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
    <div className="MenuItem__content">
      <h2 className="MenuItem__title">{title.toUpperCase()}</h2>
      <small className="MenuItem__subtitle">SELECT NOW</small>
    </div>
  </div>
);

export default MenuItem;
