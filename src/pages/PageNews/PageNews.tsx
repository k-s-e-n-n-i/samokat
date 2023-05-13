import React, { useEffect } from 'react';
import './PageNews.scss';
import WithStore from '../../redux/hoc/WithStore';
import { connect } from 'react-redux';
import { MapDispatchToProps, MapStateToProps } from '../../redux/services/GlobalFunctions';
import { Props } from './interfaces';
import { APIData } from '../../redux/services/APIDataProcessing';
import CardNew from '../../components/CardNew/CardNew';

const PageNews = ({ news, newsLoaded, alertLoaded }: Props) => {
  useEffect(() => APIData.getNews({ newsLoaded, alertLoaded }), []);

  return (
    <div className="page-news">
      {news.map((item, i) => (
        <CardNew newItem={item} key={i} />
      ))}
    </div>
  );
};

export default WithStore()(connect(MapStateToProps, MapDispatchToProps)(PageNews));
