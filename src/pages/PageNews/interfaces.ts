import { IAPINew } from '../../redux/services/APIInterfaces';

export interface Props {
  news: IAPINew[];
  newsLoaded: any;
  alertLoaded: any;
}
