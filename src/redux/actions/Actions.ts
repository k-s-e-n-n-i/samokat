const HeaderLoaded = (data: any) => ({ type: 'HEADER_LOADED', payload: data });
const AlertLoaded = (data: any) => ({ type: 'ALERT_LOADED', payload: data });

const SearchListLoaded = (data: any) => ({ type: 'SEARCH_LIST_LOADED', payload: data });
const ActiveUserLoaded = (data: any) => ({ type: 'ACTIVE_USER_LOADED', payload: data });
const NewsLoaded = (data: any) => ({ type: 'NEWS_LOADED', payload: data });

export { HeaderLoaded, ActiveUserLoaded, AlertLoaded, SearchListLoaded, NewsLoaded };
