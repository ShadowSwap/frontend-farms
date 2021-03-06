import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.shadowdefi.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.shadowdefi.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xEAD4ddac92e894F31AF63281C67A22F8512D95a1',
      },
      /*
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/viking-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/viking-swap',
      },
      */
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Blog",
        href: "https://shadowdefi-finance.medium.com/",
      },
    ],
  },
]

export default config
