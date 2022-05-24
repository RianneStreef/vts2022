module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.vts-webdesign.com`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "VTS Webdesign",
        short_name: "VTS Webdesign",
        start_url: "/",
        background_color: "#000",
        theme_color: "#40c8e0",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-KK1DZ5P3EG"],
        pluginConfig: {
          head: true,
        },
        enableWebVitalsTracking: true,
        respectDNT: true,
      },
    },
  ],
};
