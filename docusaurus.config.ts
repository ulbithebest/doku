import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Posts',
  tagline: "HIMATIF Product Documentation",
  favicon: 'img/simplified.png',

  // url: 'https://doku.himatif.ulbi.ac.id',
  url: 'https://ulbithebest.github.io',
  baseUrl: '/doku/',

  organizationName: 'HIMATIF ULBI',
  projectName: 'doku',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Doku",
      logo: {
        alt: 'Doku Logo',
        src: 'img/simplified.png',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow us on',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/ulbithebest',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/himatif.ulbi/',
            },
          ],
        },
        {
          title: 'Universitas Logistik dan Bisnis Internasional',
          items: [
            {
              label: 'Website',
              to: 'https://www.ulbi.ac.id/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/ulbi.official/',
            },
          ],
        },
      ],
      copyright: `Made with ❤︎ by Alif Fathur (HeroBuxx). Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
