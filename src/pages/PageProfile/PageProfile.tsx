import React, { useEffect } from 'react';
import './PageProfile.scss';
import WithStore from '../../redux/hoc/WithStore';
import { connect } from 'react-redux';
import { GetLoginUser, MapDispatchToProps, MapStateToProps } from '../../redux/services/GlobalFunctions';
import { Props } from './interfaces';
import { APIData } from '../../redux/services/APIDataProcessing';

const PageProfile = ({ activeUser, activeUserLoaded, alertLoaded }: Props) => {
  // useEffect(() => APIData.getUser({ activeUserLoaded, alertLoaded, login: GetLoginUser() }), []);

  const { name, surname } = activeUser;
  return (
    <div className="page-profile">
      <span>{`${name} ${surname}`}</span>
    </div>
  );
};

export default WithStore()(connect(MapStateToProps, MapDispatchToProps)(PageProfile));
