import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

import './CollectionItem.scss';

const CollectionItem = ({ addItem, ...item }) => {
  const { imageUrl, name, price } = item || {};
  return (
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
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
