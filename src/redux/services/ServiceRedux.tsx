class ServiceRedux {
  getHeader({ headerLoaded }: any) {
    headerLoaded({
      menu: [
        { link: '/news', text: 'Новости' },
        { link: '/lk', text: 'Личный кабинет' },
      ],
    });
  }
}

export const ServiceStatic = new ServiceRedux();
