import { MenuEntry, menuStatus } from '@candyswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://candyswap.online/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://candyswap.online/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://candyswap.online/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://candyswap.online/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://candyswap.online/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://candyswap.online/competition',
    status: menuStatus.SOON,
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://candyswap.online/teams',
      },
      {
        label: 'Task Center',
        href: 'https://candyswap.online/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://candyswap.online/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://candyswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://candyswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://candyswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://candyswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://candyswap.online/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.candyswap.online/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.candyswap.online',
      },
      {
        label: 'Github',
        href: 'https://github.com/Candy-Shop-Swap',
      },
      {
        label: 'Docs',
        href: 'https://docs.candyswap.online',
      },
      {
        label: 'Blog',
        href: 'https://candyswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://candyswap.creator-spring.com/',
      },
    ],
  },
]

export default config
