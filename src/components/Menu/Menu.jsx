import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './Menu.scss';

import { sections } from './Menu.data';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = { sections };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="Menu">
        {sections.map(({ title, id, imageUrl: imgUrl, size }) => {
          return (
            <MenuItem title={title} key={id} imgUrl={imgUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Menu;
