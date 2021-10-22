module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "V:TES - Powerbase Porão",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/transformed`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss"
  ],
};
