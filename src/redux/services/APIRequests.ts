import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { defer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFAPILogin, IFAPIRegister, IAPIUser, IAPINew } from './APIInterfaces';

export const baseURL = 'https://company.caaat.pro';

class APIRequests {
  axiosConfig: AxiosRequestConfig = {
    baseURL: `${baseURL}/api`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axiosConfigWithAuthorization: AxiosRequestConfig = Object.assign({}, this.axiosConfig, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('tokenSamokat')}` || '',
    },
  });

  setAxiosConfigWithAuthorization = (token: string) => {
    if (this.axiosConfigWithAuthorization.headers) {
      this.axiosConfigWithAuthorization.headers.Authorization = `Bearer ${token}`;
      this.axiosInstanceWithAuthorization = this.axiosInit(this.axiosConfigWithAuthorization);
    }
  };

  axiosInit = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);
    return axiosInstance;
  };

  axiosInstance = this.axiosInit(this.axiosConfig);
  axiosInstanceWithAuthorization = this.axiosInit(this.axiosConfigWithAuthorization);

  funcGet = (inst: AxiosInstance, url: string, queryParams?: object) => {
    return defer(() => inst.get(url, { params: queryParams })).pipe(map((result) => result.data));
  };

  get = <T>(url: string, queryParams?: object): Observable<T> => {
    return this.funcGet(this.axiosInstance, url, queryParams);
  };

  getWithAuthorization = <T>(url: string, queryParams?: object): Observable<T> => {
    return this.funcGet(this.axiosInstanceWithAuthorization, url, queryParams);
  };

  post = <T>(url: string, queryParams: object): Observable<T> => {
    return defer(() => this.axiosInstanceWithAuthorization.post(url, queryParams)).pipe(
      map((result) => result.data)
    );
  };

  delete = <T>(url: string): Observable<T> => {
    return defer(() => this.axiosInstanceWithAuthorization.delete(url)).pipe(map((result) => result.data));
  };

  put = <T>(url: string, queryParams: object): Observable<T> => {
    return defer(() => this.axiosInstanceWithAuthorization.put(url, queryParams)).pipe(
      map((result) => result.data)
    );
  };

  //-----------------------------------------------------------------------------

  register = ({ username, password, email }: { username: string; password: string; email: string }) =>
    this.post<IFAPIRegister>(`/auth/register`, { username, password, email });

  login = ({ email, password }: { email: string; password: string }) =>
    this.post<IFAPILogin>(`/auth/login`, { email, password });

  //-----------------------------------------------------------------------------

  search = (text: string) => this.post<IAPIUser[]>(`/user/search`, { text });

  getUser = (login: string) => this.get<IAPIUser>(`/user/${login}`);

  getNews = () => this.get<IAPINew[]>(`/news`);
}

export const API = new APIRequests();
