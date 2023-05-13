import React from 'react';
import { Props } from './interfaces';
import './Button.scss';
import './Button-media.scss';
import { Link } from 'react-router-dom';

const Button = ({ text, link, onClick, disabled, title }: Props) => {
  const className = 'button';

  return link ? (
    <Link to={link} className={className}>
      {text}
    </Link>
  ) : (
    <button type="submit" className={className} onClick={onClick} disabled={disabled} title={title}>
      {text}
    </button>
  );
};

export default Button;
