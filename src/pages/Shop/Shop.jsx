import React, { Component } from 'react';

import SHOP_DATA from './Shop.data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="Shop">
        <h1>SHOP PAGE HERE</h1>
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default Shop;
