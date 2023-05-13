import React, { Fragment, useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Media from 'react-media';
import { Props } from './interfaces';
import './Header.scss';
import './Header-media.scss';
import WithStore from '../../redux/hoc/WithStore';
import { connect } from 'react-redux';
import {
  bodyAuto,
  bodyHidden,
  MapDispatchToProps,
  MapStateToProps,
} from '../../redux/services/GlobalFunctions';

import { APIData } from '../../redux/services/APIDataProcessing';

import { ServiceStatic } from '../../redux/services/ServiceRedux';

const Header = (props: Props) => {
  const {
    header: { menu },
  } = props;

  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    ServiceStatic.getHeader(props);
  }, []);

  const mobMenu = popupOpen ? (
    <Fragment>
      <div
        className="header__close"
        onClick={() => {
          setPopupOpen(false);
          bodyAuto();
        }}
      ></div>
      <div className="header__popup">
        <div className="header__content">
          <div className="header__list">
            {menu.map(({ link, text }, i) => (
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive ? 'header__item-menu header__item-menu_active' : 'header__item-menu'
                }
                onClick={() => {
                  setPopupOpen(false);
                  bodyAuto();
                }}
                key={i}
              >
                {text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <div
      className="header__menu-mob p-menu"
      onClick={() => {
        setPopupOpen(true);
        bodyHidden();
      }}
    ></div>
  );

  return (
    <header className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src={require('./img/logo.svg').default}
          alt="logo"
          onClick={() => setPopupOpen(false)}
        />
      </NavLink>
      <menu className="header__menu">
        {menu.map(({ link, text }, i) =>
          text !== 'Поиск' ? (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive ? 'header__item-menu header__item-menu_active' : 'header__item-menu'
              }
              key={i}
            >
              {text}
            </NavLink>
          ) : null
        )}
      </menu>

      <Media
        queries={{
          medium: 'screen and (max-width: 850px)',
          large: 'screen and (min-width: 851px)',
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.medium && mobMenu}
            {matches.large && ''}
          </Fragment>
        )}
      </Media>
    </header>
  );
};

export default WithStore()(connect(MapStateToProps, MapDispatchToProps)(Header));
