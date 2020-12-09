// Link.react.js
import React, { useState } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export const Link = (props) => {

  const [state, setState] = useState(STATUS.NORMAL)

  const _onMouseEnter = () => {
    setState(STATUS.HOVERED);
  }

  const _onMouseLeave = () => {
    setState(STATUS.NORMAL);
  }

  return (
    <a
      className={state}
      href={props.page || '#'}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}>
      Click {props.children}!
    </a>
  );
}

export default Link;
