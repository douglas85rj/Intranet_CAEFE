module.exports = {
  siteMetadata: {
    siteUrl: "https://douglas85rj.github.io/Intranet_CAEFE/",
    title: "Intranet CAEFE",
    pathPrefix: "/intranet_caefe",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IntraCAEFE`,
        short_name: `IntraCAEFE`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png",
       
      },
    },

    "gatsby-plugin-styled-jsx",
    "gatsby-plugin-sitemap",
    

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
