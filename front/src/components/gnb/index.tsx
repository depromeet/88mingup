import './gnb.scss';

import React, { ReactNode } from 'react';
import { User, Logo } from 'assets';

interface Props {}

export function GlobalNavBar(props: Props) {
  return (
    <div className="navbar">
      <div className="item">
        <Logo className="clickable-icon" />
      </div>
      <div
        className="item"
        style={{
          width: '100%',
        }}
      ></div>
      <div className="item">
        <User className="clickable-icon" />
      </div>
    </div>
  );
}
