const sizes = {
  xs: '360px',
  sm: '600px',
  md: '992px',
  lg: '1280px'
};

const theme = {
  devices: {
    smallMobile: `(min-width: ${sizes.xs})`,
    mobile: `(min-width: ${sizes.sm})`,
    tablet: `(min-width: ${sizes.md})`,
    desktop: `(min-width: ${sizes.lg})`
  }
};

export default theme;
