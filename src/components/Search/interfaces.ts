import { IAPIUser } from '../../redux/services/APIInterfaces';

export interface Props {
  searchList: IAPIUser[];
  searchListLoaded: any;
  alertLoaded: any;
}
