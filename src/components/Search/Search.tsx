import React, { useState, Fragment } from 'react';
import Input from '../Input/Input';
import { Props } from './interfaces';
import './Search.scss';
import './Search-media.scss';
import { TypeInput } from '../../redux/services/GlobalFunctions';
import { APIData } from '../../redux/services/APIDataProcessing';
import WithStore from '../../redux/hoc/WithStore';
import { connect } from 'react-redux';
import { MapDispatchToProps, MapStateToProps } from '../../redux/services/GlobalFunctions';
import { Link } from 'react-router-dom';

const Search = ({ searchList, searchListLoaded, alertLoaded }: Props) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        APIData.search({ text: search, searchListLoaded, alertLoaded, setShowSearch });
      }}
    >
      <div className="search__input">
        <Input
          value={search}
          placeholder="Найти сотрудника просто"
          onChange={(e: TypeInput) => setSearch(e.target.value)}
          icon="search"
        />
      </div>
      {showSearch ? (
        <div className="search__list">
          {searchList.length === 0 ? (
            <span>Не найдено</span>
          ) : (
            searchList.map(({ name, surname, login }, i) =>
              i < 3 ? (
                <Link to={`/profile/${login}`} className="search__item" key={i}>{`${name} ${surname}`}</Link>
              ) : null
            )
          )}
        </div>
      ) : null}
    </form>
  );
};

export default WithStore()(connect(MapStateToProps, MapDispatchToProps)(Search));
