import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cartActions";

import "./CollectionItem.scss";

const CollectionItem = ({
  id,
  name,
  price: { value, currency },
  imageUrl,
  addItem,
}) => (
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
    <CustomButton
      className="CollectionItem__button"
      onClick={() => {
        addItem({ name, value, currency, id, imageUrl });
      }}
    >
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
