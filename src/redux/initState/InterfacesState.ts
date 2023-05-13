import { IAPINew, IAPIUser } from '../services/APIInterfaces';

export interface IFProjectState {
  header: IFHeaderState;
  alert: string[];
  searchList: IAPIUser[];
  activeUser: IAPIUser;
  news: IAPINew[];
}

export interface IFHeaderState {
  menu: IFMenu[];
  loading?: boolean;
  loadingBlock?: JSX.Element;
  error?: boolean;
  errorBlock?: JSX.Element | null;
}

export interface IFMenu {
  link: string;
  text: string;
}
