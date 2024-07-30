module.exports = {
  pathPrefix: "/blog-teste/",
  siteMetadata: {
    siteUrl: `https://vtes-porao.github.io/`,
    title: "V:TES - Powerbase Porão",
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
  },
  plugins: [
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mappings",
        path: `${__dirname}/blog/mappings`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/transformed`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
