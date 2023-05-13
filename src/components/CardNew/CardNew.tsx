import React from 'react';
import './CardNew.scss';
import { Props } from './interfaces';

const CardNew = ({ newItem }: Props) => {
  const { title } = newItem;

  return <div className="card-new">{title}</div>;
};

export default CardNew;
