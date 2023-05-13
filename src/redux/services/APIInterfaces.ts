export interface IFAPIRegister {
  success: boolean;
  error: string;
  message: string[];
  statusCode: number;
}

export interface IFAPILogin {
  accessToken: string;
}

export interface IUser {
  password: string;
  email: string;
  username?: string;
}

export interface ILogin extends IUser {
  setServerText: any;
}

export interface IRegister extends IUser {
  username: string;
  setServerText: any;
}

export interface IAPiSearch {
  text: string;
  searchListLoaded: any;
  alertLoaded: any;
  setShowSearch: any;
}

export interface IAPIUser {
  avatar: string;
  birthDate: string;
  city: string;
  email: string;
  id: string;
  login: string;
  name: string;
  surname: string;
}

export interface IAPIGetUser {
  activeUserLoaded: any;
  alertLoaded: any;
  login: string;
}

export interface IAPINew {
  image: string;
  title: string;
}

export interface IAPIGetNews {
  newsLoaded: any;
  alertLoaded: any;
}
