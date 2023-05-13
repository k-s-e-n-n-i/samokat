import React, { useState } from 'react';
import { Props } from './interfaces';
import './Input.scss';
import './Input-media.scss';

const Input = ({
  type = 'text',
  name,
  placeholder = '',
  value,
  label,
  closeClick,
  icon,
  onChange,
  onClick,
}: Props) => {
  const [inputType, setInputType] = useState(type);
  return (
    <div className="input">
      {label ? <p className="input__label">{label}</p> : null}
      <input
        type={inputType}
        name={name ? name : ''}
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => (onChange ? onChange(e) : null)}
        onClick={onClick}
      />
      {/* {closeClick ? <div className="input__close" onClick={() => closeClick()}></div> : null} */}
      {icon ? (
        <span
          className={`input__icon input__icon-${icon}`}
          onClick={() => {
            if (icon === 'password') {
              setInputType(inputType === 'password' ? 'text' : 'password');
            }
          }}
        ></span>
      ) : null}
    </div>
  );
};

export default Input;
