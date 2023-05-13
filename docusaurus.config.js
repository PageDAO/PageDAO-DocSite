const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'PageDAO: Web3 Publishing Community',
  tagline: 'The future of publishing will involve digital collectibles and Web3 technologies. PageDAO is an organization founded by writers to develop new, community-owned publishing tools in the age of blockchain technologies.',
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
          editUrl: 'https://github.com/PageDAO/PageDAO-DocSite/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PageDAO/PageDAO-DocSite/',
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
            href: 'https://snapshot.org/#/pagedao.eth',
            label: 'Snapshot Governance',
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
                label: 'Snapshot Governance',
                href: 'https://vote.pagedao.org/#/pagedao.eth',
              },
              {
                label: 'NFTBook Store',
                href: 'https://nftbookstore.com',
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
                label: 'ETH Address: 0x60e683c6514edd5f758a55b6f393bebbafaa8d5e',
                href: 'https://etherscan.io/address/0x60e683c6514edd5f758a55b6f393bebbafaa8d5e',
              },
              
              {
                label: 'Swap on Uniswap',
                href: 'https://bit.ly/swap-page',
              },
              {
                label: 'View on DexTools',
                href: 'https://bit.ly/page-dt',
              },
              {
                label: 'Coingecko',
                href: 'https://www.coingecko.com/en/coins/page',
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
        theme: lightCodeTheme,
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
