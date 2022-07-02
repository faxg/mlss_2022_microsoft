module.exports = {
  siteMetadata: {
    siteTitle: `MLSS 2022 - Machine learning summer school in healthcare and biosciences w. Microsoft`,
    defaultTitle: `MLSS 2022`,
    siteTitleShort: `MLSS 2022`,
    siteDescription: `Microsoft Resources for MLSS 2022 at ETH Zurich`,
    siteUrl: `https://faxg.github.io/mlss_2022_microsoft/`,
    siteAuthor: `@faxg`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
    pathPrefix: `/mlss_2022_microsoft`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MLSS 2022`,
        short_name: `MLSS 2022`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
