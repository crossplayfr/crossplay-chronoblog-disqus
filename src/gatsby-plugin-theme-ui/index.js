import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#EEFEFE',
    link: '#888',
    primary: '#0C94E8',
    secondary: '#AAA',
    muted: '#CFE1E8',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#0e0f17',
        muted: '#888',
        link: '#fff'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6,
    authorBanner: 6
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: 'Open Sans, sans-serif',
    heading: 'Oswald, sans-serif',
    monospace: 'Menlo, monospace'
  }
};
