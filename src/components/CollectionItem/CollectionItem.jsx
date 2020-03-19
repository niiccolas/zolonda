import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="CollectionItem">
    <div
      className="CollectionItem__image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="CollectionItem__footer">
      <span className="CollectionItem__footerName">{name}</span>
      <span className="CollectionItem__footerPrice">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
