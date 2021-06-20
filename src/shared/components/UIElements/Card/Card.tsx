import React, { DetailedHTMLProps, HTMLAttributes,ReactElement } from 'react';

import './Card.css';

class CardProps {
  className?: string;
  style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  children?: ReactElement<any,any> | string;

  constructor(){
    this.className = '';
  }
}
const Card = (props : CardProps) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
