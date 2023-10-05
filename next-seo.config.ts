import { DefaultSeoProps } from 'next-seo';

const description = 'Правила Підземелля і Дракони українською мовою';
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: '%s | Підземелля і дракони',
  defaultTitle: 'Підземелля і дракони',
  description,

  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    title: 'Підземелля і дракони',
    description,
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'shortcut icon',
      type: 'image/png',
      href: '/favicon/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
  ],
};

export default config;
