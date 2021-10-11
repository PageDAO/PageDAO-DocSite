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
  projectName: 'PageDAO', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wippublishing/PageDAO-DocSite/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wippublishing/PageDAO-DocSite/edit/master',
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
            docId: 'whitepaper',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          
          {
            href: 'https://github.com/wippublishing/PageDAO-DocSite',
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
                to: '/docs/whitepaper',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              
              {
                label: 'Discord',
                href: 'https://bit.ly/wipp-discord',
              },
              {
                label: 'Snapshot',
                href: 'https://vote.pagedao.org/#/pagedao.eth',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wippublishing/PageDAO-DocSite',
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
                href: 'https://bit.ly/page-uniswap',
              },
              {
                label: 'Stake on Tosdis',
                href: 'https://bit.ly/page-staking',
              },
              {
                label: 'View on DexTools',
                href: 'https://bit.ly/page-staking',
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
});
