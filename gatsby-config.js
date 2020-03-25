module.exports = {
  siteMetadata: {
    title: "株式会社 奥越ライフサポート",
    author: "Ryuhei Toriyama",
    description: "就労継続支援A型の作業所、奥越ライフサポートの説明"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'OKUETSU-LIFE-SUPPORT',
        short_name: 'OLS',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.svg', // This path is relative to the root of the site. first example: src/assets/images/website-icon.png
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
