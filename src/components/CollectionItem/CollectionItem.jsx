import React from "react";

import "./CollectionItem.scss";

const CollectionItem = ({ name, price: { value, currency }, imageUrl }) => (
  <div className="CollectionItem">
    <div
      className="CollectionItem__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="CollectionItem__footer">
      <span className="CollectionItem__footerName">{name}</span>
      <span className="CollectionItem__footerPrice">
        {currency}
        {value}
      </span>
    </div>
  </div>
);

export default CollectionItem;
