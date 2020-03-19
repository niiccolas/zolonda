import React, { Component } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from './Shop.data';

import './Shop.scss';

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
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default Shop;
