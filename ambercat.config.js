module.exports = {
  language: 'id',
  direction: 'ltr',
  translations: {
    en: {
      name: 'English',
      direction: 'ltr',
    },
  },
  serverPort: 3000,
  themeDir: 'src',
  buildDir: 'docs',
  buildPrefix: 'client.build',
  tmpDir: 'tmp',
  postDir: 'src/posts',
  numOfRecentPosts: 10,
  tailwindConfig: 'src/tailwind.js',
  staticFilesDir: 'public',
  staticPages: [
    {
      filename: 'index',
      title: 'Ambercat',
      description: 'A blog by Rahmanda Wibowo'
    },
    {
      filename: '404',
      title: '404'
    },
    {
      filename: 'archive',
      title: 'Archive',
      numOfPosts: 'all',
    },
  ],
  assetInjector(assetType, pageType) {
    if (assetType === 'js' && pageType === 'post') {
      return require('./disqus');
    }
    return '';
  },
  configureWebpack(config, isServer) {
    return {};
  },
};
