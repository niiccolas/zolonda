import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './Menu.scss';

import sections from './Menu.data';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = { sections };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="Menu">
        {sections.map(({ id, size, title, imageUrl: imgUrl, linkUrl }) => {
          return (
            <MenuItem
              key={id}
              size={size}
              title={title}
              imgUrl={imgUrl}
              linkUrl={linkUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default Menu;
