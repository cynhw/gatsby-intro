module.exports = {
  siteMetadata: {
    title: 'National Parks in Washington',
    description:
      'A photo blog of national parks in Washington.',
  },
  plugins: ['gatsby-plugin-emotion', 
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/components/layouts.js'),
      }
    },
  },
],
};
