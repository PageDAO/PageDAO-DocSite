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
            type: 'doc',
            docId: 'whitepaper/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'Community',
            to: 'community/space-pirates',
            activeBaseRegex: 'community/.*',
          },
          {
            label: 'Join the Guild',
            href: 'https://airtable.com/shrwskd6403xPAQSW',
            position: 'left',
          },
          
          {
            href: 'https://forum.pagedao.org',
            label: 'Forum',
            position: 'right',
          },
          {
          href: 'https://github.com/PageDAO/PageDAO-DocSite',
          label: 'GitHub',
          position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: '/docs/whitepaper/intro',
              },
              

            ],
          },
          {
            title: 'Community',
            items: [
              
              {
                label: 'Discord',
                href: 'https://bit.ly/pagedao-discord',
              },
              {
                label: 'Snapshot',
                href: 'https://vote.pagedao.org/#/pagedao.eth',
              },
              {
                label: 'Discourse',
                href: 'https://forum.pagedao.org/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PageDAO/PageDAO-DocSite',
              },
              {
                label: 'Join the PageDAO Guild',
                href: 'https://airtable.com/shrwskd6403xPAQSW',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/page_dao',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/work-in-progress-publishing',
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
