import React from 'react';
import './PageMain.scss';
import './PageMain-media.scss';
import WithStore from '../../redux/hoc/WithStore';
import { connect } from 'react-redux';
import { MapDispatchToProps, MapStateToProps } from '../../redux/services/GlobalFunctions';
import Search from '../../components/Search/Search';

const PageMain = () => {
  return (
    <div className="page-main">
      <Search />
    </div>
  );
};

export default WithStore()(connect(MapStateToProps, MapDispatchToProps)(PageMain));
