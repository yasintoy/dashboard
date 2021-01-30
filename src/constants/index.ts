const Constants = {
  LIGHT_MODE: 'light',
  DARK_MODE: 'dark',
  FILTERS: [
    'saved',
    'pending',
    'active',
    'paused',
    'expired',
    'declined',
    'terminated',
  ],
  WORK_FLOWS: {
    saved: ['pending'],
    pending: ['active', 'declined'],
    active: ['paused', 'terminated', 'expired'],
    paused: ['active'],
  },
};

export default Constants;
