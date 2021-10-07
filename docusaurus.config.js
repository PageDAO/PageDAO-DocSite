const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'PageDAO',
  tagline: 'Metaverse writers guild',
  url: 'https://your-docusaurus-test-site.com',
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
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
            label: 'Whitepaper',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://bit.ly/page-swap',
            label: 'Uniswap',
            position: 'left',
          },
          {
            href: 'https://bit.ly/page-staking',
            label: 'Tosdis',
            position: 'left',
          },
          {
            href: 'https://bit.ly/page-dt',
            label: 'DexTools',
            position: 'left',
          },
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
                label: '$PAGE Whitepaper',
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
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wippublishing/PageDAO-DocSite',
              },
            ],
          },
          {
            title: 'Trading',
            items: [
              {
                label: 'Swap $PAGE on Uniswap',
                href: 'https://bit.ly/page-uniswap',
              },
              {
                label: 'Stake $PAGE on Tosdis',
                href: 'https://bit.ly/page-staking',
              },
              {
                label: 'View $PAGE on DexTools',
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
