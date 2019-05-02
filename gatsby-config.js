module.exports = {
   siteMetadata: {
      title: 'Zilin Deng',
      description: 'A designer and front-end developer currently dwelling amidst the bleak, dystopic suburbs of Markham. He views his creative endeavour as a form of escape from nowness, where in response—gives birth to new realities.'
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-less`,
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
         }
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: 'Zilin Deng',
            short_name: 'boilerplate',
            start_url: '/',
            background_color: '#ffffff',
            theme_color: '#0f0f0f',
            display: 'minimal-ui',
            icon: 'src/images/favicon.png', // This path is relative to the root of the site.
         }
      },
      `gatsby-plugin-offline`,      
      { // * IMPORTANT * Content Directory Business + Gatsby Image Support
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/static/assets`,
            name: "assets"
         }
      },
      { // * IMPORTANT * Content Directory Business
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/content/blog`,
            name: "blog"
         }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
               resolve:`gatsby-remark-relative-images-v2`,
               options: {
                  name: 'assets',
               }
               },
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1080,
               },
             },
           ],
         },
       },
        {
         resolve: `gatsby-plugin-netlify-cms`,
         options: {
            modulePath: `${__dirname}/src/cms/cms.js`
         }
      },
      `gatsby-plugin-netlify`,
   ],
}
