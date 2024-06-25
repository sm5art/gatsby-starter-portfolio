import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Ubuntu', 'sans-serif'],
  bodyFontFamily: ['Ubuntu', 'serif'],
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
