module.exports = {
  siteMetadata: {
    siteTitle: 'CrossPlay',
    siteDescription:
      'Jeux vidéo et technologie, on vous en parle à notre façon.',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://www.crossplay.fr',
    pathPrefix: '/',
    siteLanguage: 'fr',
    ogLanguage: `fr_FR`,
    author: 'CrossPlay', // for example - 'Ivan Ganev'
    authorDescription: 'short author description', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:mymail@mail.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/ganevru`
      },
      {
        icon: `facebook`,
        url: `https://github.com/Chronoblog/gatsby-theme-chronoblog`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'Voir plus',
          feedSearchPlaceholder: 'Rechercher',
          cardReadMoreButton: 'Lire la suite →',
          allTagsButton: 'Tous les tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CrossPlay`,
        short_name: `CrossPlay`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `crossplay`
      }
    }
  ]
};
