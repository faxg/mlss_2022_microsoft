module.exports = {
  pathPrefix: `mlss_2022_microsoft`,
  trailingSlash: "always",

  siteMetadata: {
    siteTitle: `MLSS 2022 - Machine learning summer school in healthcare and biosciences w. Microsoft`,
    defaultTitle: `MLSS 2022`,
    siteTitleShort: `MLSS 2022`,
    siteDescription: `Microsoft Resources for MLSS 2022 at ETH Zurich`,
    siteUrl: `https://faxg.github.io/mlss_2022_microsoft/`,
    siteAuthor: `@faxg`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#6887c4`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-microsoft-learn-catalog",
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/faxg/mlss_2022_microsoft`,
        baseDir: `mlss_docs`,
        // see https://github.com/jpedroschmitz/rocketdocs/tree/main/@rocketseat/gatsby-theme-docs-core
        withMdx: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
          },
        ],
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
        icon: `static/banner.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://github.com/faxg/mlss_2022_microsoft`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
