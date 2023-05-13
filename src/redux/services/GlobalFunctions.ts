import { bindActionCreators } from 'redux';
import { IFProjectState } from '../initState/InterfacesState';
import {
  HeaderLoaded,
  AlertLoaded,
  ActiveUserLoaded,
  SearchListLoaded,
  NewsLoaded,
} from '../actions/Actions';

export const MapStateToProps = ({ header, alert, searchList, activeUser, news }: IFProjectState) => {
  return { header, alert, searchList, activeUser, news };
};

export const MapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      headerLoaded: HeaderLoaded,
      alertLoaded: AlertLoaded,
      searchListLoaded: SearchListLoaded,
      activeUserLoaded: ActiveUserLoaded,
      newsLoaded: NewsLoaded,
    },
    dispatch
  );
};

export const bodyHidden = () => {
  document.querySelector('body')?.classList.add('body-hidden');
};
export const bodyAuto = () => {
  document.querySelector('body')?.classList.remove('body-hidden');
};

interface IFServerError {
  response: {
    status: number;
    data: any;
  };
  message: string;
}

export const GetServerTextError = (err: IFServerError) => {
  let message = '';
  switch (err.response.status) {
    case 400:
      err.response.data.message.forEach((item: string) => {
        message += `${item}<br>`;
      });
      break;
    case 401:
      message = err.response.data.message;
      break;
    default:
      message = err.message;
  }
  return message;
};

export interface TypeInput extends React.ChangeEvent<HTMLInputElement> {}

export const GetLoginUser = () => {
  const findIdEvent = /\/profile\/([0-9a-z-]+)/.exec(window.location.pathname);
  return findIdEvent ? findIdEvent[1] : '';
};
