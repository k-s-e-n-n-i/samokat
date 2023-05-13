import React from 'react';
import { connect } from 'react-redux';
import WithStore from '../../redux/hoc/WithStore';
import { MapDispatchToProps, MapStateToProps } from '../../redux/services/GlobalFunctions';
import './Alert.scss';

const Alert = ({ alert, alertLoaded }: { alert: string[]; alertLoaded: any }) => {
  if (alert.length) {
    return (
      <div className="alert">
        {alert.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        <div className="alert__close" onClick={() => alertLoaded([])}></div>
      </div>
    );
  }

  return null;
};

export default WithStore()(connect(MapStateToProps, MapDispatchToProps)(Alert));
