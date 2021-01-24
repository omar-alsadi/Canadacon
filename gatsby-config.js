module.exports = {
  siteMetadata: {
    title: `Canada Comic Con`,
    description: `Canada Con is a website which made by love to poeple who loves anime and comic`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/assest/images/montreal.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBapC7kdbsmNKXxJPKiiqHVrOWLGEzZNus",
          authDomain: "canada-con.firebaseapp.com",
          projectId: "canada-con",
          storageBucket: "canada-con.appspot.com",
          messagingSenderId: "1013868946502",
          appId: "1:1013868946502:web:a33233c5ff09ead6439647",
          measurementId: "G-0S8VY75YB1"
        }
      }
    }
  ],
}
