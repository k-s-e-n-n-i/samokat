import React from 'react';
import { catchError, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {
  IFAPILogin,
  IFAPIRegister,
  IAPIUser,
  IAPIGetNews,
  IAPIGetUser,
  IAPINew,
  IAPiSearch,
  ILogin,
  IRegister,
} from './APIInterfaces';

import { API } from './APIRequests';
import { GetServerTextError } from './GlobalFunctions';

class APIDataProcessing {
  login = ({ email, password, setServerText }: ILogin) => {
    API.login({ email, password })
      .pipe(
        tap(({ accessToken }: IFAPILogin) => {
          setServerText('');
          API.setAxiosConfigWithAuthorization(accessToken);
          localStorage.setItem('tokenFinance', accessToken);
        }),
        catchError((err) => {
          setServerText(GetServerTextError(err));
          return of(err);
        })
      )
      .subscribe();
  };
  register = ({ username, password, email, setServerText }: IRegister) => {
    API.register({ username, password, email })
      .pipe(
        tap(({ message }: IFAPIRegister) => {
          setServerText(message);
        }),
        catchError((err) => {
          setServerText(GetServerTextError(err));
          return of(err);
        })
      )
      .subscribe();
  };

  //------------------------------------------------------------

  search = ({ text, searchListLoaded, alertLoaded, setShowSearch }: IAPiSearch) => {
    API.search(text)
      .pipe(
        tap((data: IAPIUser[]) => searchListLoaded(data)),
        finalize(() => setShowSearch(true)),
        catchError((err) => {
          alertLoaded(err.response.data.message);
          return of(err);
        })
      )
      .subscribe();
  };

  getUser = ({ activeUserLoaded, alertLoaded, login }: IAPIGetUser) => {
    API.getUser(login)
      .pipe(
        tap((data: IAPIUser) => activeUserLoaded(data)),
        catchError((err) => {
          alertLoaded(err.response.data.message);
          return of(err);
        })
      )
      .subscribe();
  };

  getNews = ({ newsLoaded, alertLoaded }: IAPIGetNews) => {
    // API.getNews()
    //   .pipe(
    //     tap((data: IAPINew[]) => newsLoaded(data)),
    //     catchError((err) => {
    //       alertLoaded(err.response.data.message);
    //       return of(err);
    //     })
    //   )
    //   .subscribe();

    newsLoaded([
      { Image: '', title: 'Первая новость' },
      { Image: '', title: 'Первая новость' },
      { Image: '', title: 'Первая новость' },
      { Image: '', title: 'Первая новость' },
      { Image: '', title: 'Первая новость' },
    ]);
  };
}

export const APIData = new APIDataProcessing();
