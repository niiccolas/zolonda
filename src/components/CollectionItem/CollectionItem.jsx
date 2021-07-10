import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="CollectionItem">
    <div
      className="CollectionItem__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="CollectionItem__footer">
      <span className="CollectionItem__footerName">{name}</span>
      <span className="CollectionItem__footerPrice">{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
