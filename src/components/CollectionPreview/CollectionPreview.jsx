import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="CollectionPreview">
    <h1 className="CollectionPreview__title">
      {(title && title.toUpperCase()) || 'data_error'}
    </h1>
    <div className="CollectionPreview__preview">
      {(items &&
        items
          .filter((_item, idx) => idx < 4)
          .map(item => <CollectionItem key={item?.id} {...item} />)) ||
        'data_error'}
    </div>
  </div>
);

export default CollectionPreview;
