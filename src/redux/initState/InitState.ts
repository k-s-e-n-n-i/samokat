import { IAPIUser } from '../services/APIInterfaces';
import { IFProjectState } from './InterfacesState';

const UserBlank: IAPIUser = {
  avatar: '',
  birthDate: '',
  city: '',
  email: '',
  id: '',
  login: '',
  name: '',
  surname: '',
};

export const ProjectState: IFProjectState = {
  header: {
    menu: [],
  },
  alert: [],
  searchList: [],
  activeUser: UserBlank,
  news: [],
};
