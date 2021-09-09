import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#FFF',
    link: '#BB9ED3',
    primary: '#A56ED3',
    secondary: '#A56ED3',
    muted: '#BB9ED3',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#fff',
        background: '#000',
        muted: '#87EDF6',
        link: '#fff',
      },
    },
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 2,
    button: 2,
    search: 2,
    code: 2,
    img: 2,
    authorBanner: 2,
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2,
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: 'Open Sans, sans-serif',
    heading: 'Oswald, sans-serif',
    monospace: 'Menlo, monospace',
  },
};
