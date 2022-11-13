// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'You open - Sri-Lanka',
  tagline: 'Гайд для туристов и экспатов',
  url: 'https://sri-lanka.you-open.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ComradeAx0n', // Usually your GitHub org/user name.
  projectName: 'you-open-sri-lanka', // Usually your repo name.

  // Recomended to set for GitHub Pages deployment
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs only mode
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ComradeAx0n/you-open-sri-lanka/tree/master',
        },
        // blog: {
        //   id: 'events',
        //   path: './events',
        //   // blogTitle: 'Эвенты',
        //   // blogDescription: 'Эвенты',
        //   routeBasePath: 'events',
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/ComradeAx0n/you-open-sri-lanka/tree/master',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-QH27QWY0H1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: './static/img/sri-lanka_flag.png',
      navbar: {
        hideOnScroll: true,
        title: 'You open - Sri-Lanka',
        logo: {
          alt: 'You open - Sri-Lanka Logo',
          src: 'img/Flag_of_Sri_Lanka.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Гайд',
          // },
          // Не работает блог если поменять путь
          // {to: './events', label: 'Эвенты', position: 'left'},
          {
            href: 'https://github.com/ComradeAx0n/you-open-sri-lanka',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} You open. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // plugins: [
      //   [
      //     '@docusaurus/plugin-content-blog',
      //     {
      //       /**
      //        * Required for any multi-instance plugin
      //        */
      //       id: 'events-blog',
      //       /**
      //        * URL route for the blog section of your site.
      //        * *DO NOT* include a trailing slash.
      //        */
      //       routeBasePath: 'events',
      //       /**
      //        * Path to data on filesystem relative to site dir.
      //        */
      //       path: './events',
      //     },
      //   ],
      // ]
    }),
};

module.exports = config;
