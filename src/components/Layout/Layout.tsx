import React, { Fragment } from 'react';
import { Props } from './interfaces';

import Header from '../Header/Header';
import { Navigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

class Layout extends React.Component<Props> {
  render() {
    if (!localStorage.getItem('tokenFinance')) {
      return <Navigate to="/login" />;
    }

    const { page } = this.props;

    return (
      <Fragment>
        <Header />
        {page}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
