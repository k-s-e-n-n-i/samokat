import { ProjectState } from '../initState/InitState';

const reducer = (state: any = ProjectState, action: { type: string; payload: object }) => {
  switch (action.type) {
    case 'HEADER_LOADED':
      return { ...state, header: { ...state.header, ...action.payload } };
    case 'ALERT_LOADED':
      return { ...state, alert: action.payload };
    case 'SEARCH_LIST_LOADED':
      return { ...state, searchList: action.payload };
    case 'ACTIVE_USER_LOADED':
      return { ...state, activeUser: action.payload };
    case 'NEWS_LOADED':
      return { ...state, news: action.payload };
    default:
      return state;
  }
};

export default reducer;
