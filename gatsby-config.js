module.exports = {
  siteMetadata: {
    siteUrl: "https://douglas85rj.github.io/Intranet_CAEFE/",
    title: "Intranet CAEFE",
     pathPrefix: "/intranet_caefe",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
