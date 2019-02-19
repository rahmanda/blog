module.exports = {
  serverPort: 3000,
  themeDir: 'src',
  buildDir: 'docs',
  buildPrefix: 'client.build',
  tmpDir: 'tmp',
  postDir: 'src/posts',
  numOfRecentPosts: 5,
  tailwindConfig: 'src/tailwind.js',
  staticFilesDir: 'public',
  staticPages: [
    { filename: 'index', title: 'Ambercat' },
    { filename: '404', title: '404' },
  ],
  configureWebpack(config, isServer) {
    return {};
  },
};
