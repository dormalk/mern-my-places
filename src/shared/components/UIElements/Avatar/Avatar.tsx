import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './Avatar.css';

class AvaterProps {
  className?: string;
  style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  image?: string;
  alt?: string;
  width?: number;
}

const Avatar = (props : AvaterProps) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
