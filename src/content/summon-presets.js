export const daoConstants = {
  //should this default to match voting period or grace period?
  // or are we only letting people summon v1 in hard mode
  abortWindow: '1',
  dilutionBound: '3',
};

export const daoPresets = [
  {
    presetName: 'Grants',
    preseStubtitle: 'Accelerators',
    presetDescription: 'Spread around the wealth and accelerate good stuff.',
    currency: 'WETH',
    currencyAddress: process.env.REACT_APP_WETH_ADDRESS,
    minimumTribute: '10',
    votingPeriod: '168',
    gracePeriod: '72',
    proposalDeposit: '0.01',
    processingReward: '0.01',
    periodDuration: '3600',
    color: '#ea8923',
  },
  {
    presetName: 'Ventures',
    presetSubtitle: 'Investments',
    presetDescription:
      'Invest on chain with a venture fund at your fingertips.',
    currency: 'WETH',
    currencyAddress: process.env.REACT_APP_WETH_ADDRESS,
    minimumTribute: '50',
    votingPeriod: '7',
    gracePeriod: '7',
    proposalDeposit: '0.1',
    processingReward: '0.01',
    periodDuration: '86400',
    color: '#AB3593',
  },
  {
    presetName: 'Guilds',
    presetSubtitle: 'Services',
    presetDescription: 'BuidL with fellow journeymen for clients and glory.',
    currency: 'DAI',
    currencyAddress: process.env.REACT_APP_DAI_ADDRESS,
    minimumTribute: '100',
    votingPeriod: '60',
    gracePeriod: '24',
    proposalDeposit: '5',
    processingReward: '2',
    periodDuration: '7200',
    color: '#4FBF9F',
  },
  {
    presetName: 'Clubs',
    presetSubtitle: 'Social',
    presetDescription:
      'Hang with your friends and commrades to nerd out or just chill.',
    currency: 'DAI',
    currencyAddress: process.env.REACT_APP_DAI_ADDRESS,
    minimumTribute: '10',
    votingPeriod: '4320',
    gracePeriod: '2880',
    proposalDeposit: '5',
    processingReward: '5',
    periodDuration: '60',
    color: '#F16061',
  },
  {
    presetName: 'Non-profit',
    presetSubtitle: 'Impact',
    presetDescription:
      'Decentralize to do good for the world and make an impact that lasts.',
    currency: 'DAI',
    currencyAddress: process.env.REACT_APP_DAI_ADDRESS,
    minimumTribute: '25',
    votingPeriod: '240',
    gracePeriod: '96',
    proposalDeposit: '5',
    processingReward: '0',
    periodDuration: '1800',
    color: '#129AC6',
  },
  {
    presetName: 'Products',
    presetSubtitle: 'Projects',
    presetDescription:
      'Raid together to get projects and products done in record time.',
    currency: 'DAI',
    currencyAddress: process.env.REACT_APP_DAI_ADDRESS,
    minimumTribute: '250',
    votingPeriod: '60',
    gracePeriod: '36',
    proposalDeposit: '5',
    processingReward: '5',
    periodDuration: '7200',
    color: '#513e97',
  },
];

export const currencyOptions = [
  {
    value: 'DAI',
    label: 'DAI',
    address: process.env.REACT_APP_DAI_ADDRESS,
  },
  {
    value: 'WETH',
    label: 'WETH',
    address: process.env.REACT_APP_WETH_ADDRESS,
  },
];
