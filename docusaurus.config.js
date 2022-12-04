const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'We are PageDAO',
  tagline: 'Our mission is to fuel creative literary pursuits in blockchain, the metaverse and beyond.',
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
          editUrl: 'https://github.com/PageDAO/PageDAO-DocSite/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PageDAO/PageDAO-DocSite/edit/master',
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
            label: 'Commonwealth Forum',
            href: 'https://commonwealth.im/official-pagedao-membership/discussions',
            position: 'right',
          },
          
          {
            label: 'Mint an NFTBook',
            href: 'https://mint.nftbookbazaar.com',
            position: 'left',
          },
          
          {
            label: 'ReadMe Books on OpenSea',
            href: 'https://opensea.io/collection/readme-books',
            position: 'left',
          },

          {
            href: 'https://snapshot.org/#/pagedao.eth',
            label: 'Snapshot Governance',
            position: 'right',
          },
          {
          href: 'https://github.com/PageDAO/PageDAO-DocSite',
          label: 'GitHub',
          position: 'left',
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
                label: 'GitHub',
                href: 'https://github.com/PageDAO/PageDAO-DocSite',
              },

              {
                label: 'PageDAO in the Monaverse',
                href: 'https://monaverse.com/spaces/pagedao-library-of-alexandria?invite=T0Rjd05UWTVOUTp1cy8q',
              },
              {
                label: 'Scholar and Scribe',
                href: 'https://peakd.com/c/hive-199275/created',
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
            title: 'Trading',
            items: [
              {
                label: 'Swap on Uniswap',
                href: 'https://bit.ly/swap-page',
              },
              {
                label: 'Stake on Tosdis',
                href: 'https://bit.ly/page-staking',
              },
              {
                label: 'View on DexTools',
                href: 'https://bit.ly/page-dt',
              },
              {
                label: 'Etherscan',
                href: 'https://etherscan.io/address/0x60e683c6514edd5f758a55b6f393bebbafaa8d5e',
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
