import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imgUrl, match, linkUrl, size, history }) => (
  <div
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    className={size === 'large' ? 'MenuItem MenuItem__large' : 'MenuItem'}
  >
    <div
      className="MenuItem__bgImage"
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
    <div className="MenuItem__content">
      <h2 className="MenuItem__title">{title.toUpperCase()}</h2>
      <small className="MenuItem__subtitle">SHOP NOW</small>
    </div>
  </div>
);

export default withRouter(MenuItem);
