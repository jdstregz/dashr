const Routes = () => {
  return {
    dashboard: {
      text: 'Dashboard',
      link: '/dashboard',
      icon: null,
      description: 'Dashboard for quick profile view and feeds',
      index: 0,
    },
    mainRoute: {
      text: 'Route 1',
      link: '/main-route',
      icon: null,
      description: 'Main route',
      index: 1,
      subroutes: {
        sub1: {
          index: 0,
          text: 'Subroute 1',
          link: '/sub-1',
          icon: null,
          description: 'This is subroute 1',
        },
        sub2: {
          index: 1,
          text: 'sub-2',
          link: '/sub-2',
          icon: null,
          description: 'This is subroute 2',
        },
      },
    },
    analytics: {
      text: 'Analytics',
      link: '/analytics',
      icon: null,
      description: 'An example analytics route',
      index: 2,
    },
    idk: {
      text: 'I dunno',
      link: '/i-d-k',
      icon: null,
      description: 'Something',
      index: 3,
    },
    profile: {
      text: 'Settings',
      link: '/settings',
      icon: null,
      description: 'Profile settings',
      index: 4,
    },
  };
};
export default Routes;
