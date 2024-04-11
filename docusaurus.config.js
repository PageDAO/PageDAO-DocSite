const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'PageDAO',
  tagline: 'PageDAO is heading to EthDenver Feb 26-Mar 3rd.',
  url: 'https://pagedao.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PageDAO', // Usually your GitHub org/user name.
  projectName: 'PageDAO-DocSite', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PageDAO/PageDAO-DocSite/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PageDAO/PageDAO-DocSite/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      navbar: {
        title: 'PageDAO',
        logo: {
          alt: 'Page Logo',
          src: 'img/logo.svg',
        },
        items: [       
          {
            label: 'Mint an NFTBook',
            href: 'https://mint.nftbookbazaar.com',
            position: 'left',
          },
          
          {
            label: 'Readme Books on OpenSea',
            href: 'https://opensea.io/collection/readme-books',
            position: 'left',
          },

          {
            href: 'https://daodao.zone/dao/osmo1a40j922z0kwqhw2nn0nx66ycyk88vyzcs73fyjrd092cjgyvyjksrd8dp7/home',
            label: 'Governance',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'right',
            label: 'Project Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Community',
            items: [

              {
                label: 'Governance',
                href: 'https://daodao.zone/dao/osmo1a40j922z0kwqhw2nn0nx66ycyk88vyzcs73fyjrd092cjgyvyjksrd8dp7/home',

              },
              

            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://bit.ly/pagedao-discord',
              },
              {
                label: 'Cent Pages',
                href: 'https://page.cent.co',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/page_dao',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/pagedao/',
              },
              
            ],
          },
          {
            title: 'Page Token',
            items: [
              {
                label: 'Etherscan',
                href: 'https://etherscan.io/address/0x60e683c6514edd5f758a55b6f393bebbafaa8d5e',
              },
              {
                label: 'Polygonscan',
                href: 'https://polygonscan.com/token/0x9ceE70895726B0ea14E6019C961dAf32222a7C2f',
              },
              {
                label: 'Swap on Uniswap',
                href: 'https://bit.ly/swap-page',
              },
              {
                label: 'Swap on Osmosis',
                href: 'https://app.osmosis.zone/pool/1344',
              },
              {
                label: 'View on DexTools',
                href: 'https://bit.ly/page-dt',
              },
              {
                label: 'Coingecko',
                href: 'https://www.coingecko.com/en/coins/page',
              },
              {
                html: `<a href="#" onclick="
                if (window.ethereum) {
                  ethereum.request({method: 'eth_chainId'})
                  .then((currentChainId)=>{
                    if (currentChainId=='0x1') {
                      ethereum.request({
                        method: 'wallet_watchAsset',
                        params: {
                          type: 'ERC20',
                          options: {
                            address: '0x60e683c6514edd5f758a55b6f393bebbafaa8d5e',
                            symbol: 'PAGE',
                            decimals: 8,
                            image: 'https://pagedao.org/img/logo.svg',
                          }
                        }
                      })
                      .then((success) => {
                        if (success) {
                          console.log('PAGE successfully added to wallet');
                        } else {
                          console.log('unfortunate error');
                        }
                      });
                    }
                    if (currentChainId=='0x89') {
                      ethereum.request({
                        method: 'wallet_watchAsset',
                        params: {
                          type: 'ERC20',
                          options: {
                            address: '0x9ceE70895726B0ea14E6019C961dAf32222a7C2f',
                            symbol: 'PAGE',
                            decimals: 8,
                            image: 'https://pagedao.org/img/logo.svg',
                          }
                        }
                      })
                      .then((success) => {
                        if (success) {
                          console.log('PAGE successfully added to wallet');
                        } else {
                          console.log('unfortunate error');
                        }
                      });
                    }
                  });
                }

                  
                 
                ">Add PAGE to Metamask</a>`
              }
            ],
          },
          {
            title: 'Partners',
            items: [

              {
                label: 'Meta-Builders',
                href: 'https://meta-builders.com',
              },
              {
                label: 'Cent',
                href: 'https://cent.co',
              },
              {
                label: 'Polygon',
                href: 'https://www.polygon.technology/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PageDAO`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'community',
          path: 'community',
          routeBasePath: 'community',
          sidebarPath: require.resolve('./community/sidebars.js'),
          editUrl: 'https://github.com/PageDAO/PageDAO-DocSite/edit/master',
        },
      ],
    ]
});
