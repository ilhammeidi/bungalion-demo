import { makeStyles } from 'tss-react/mui';

const deco = {
  borderRadius: 20,
  transform: 'rotate(45deg)',
  position: 'absolute',
  opacity: 0.2
};

const heroBanner = makeStyles({ uniqId: 'hero_banner' })((theme, _params, classes) => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  small: {
    ...deco,
    width: 140,
    height: 140,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  big: {
    ...deco,
    width: 200,
    height: 200,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
  },
  leftDeco: {
    position: 'absolute',
    left: 0,
    top: 200,
    [`& .${classes.big}`]: {
      left: 80,
      top: 200
    },
    [`& .${classes.small}`]: {
      left: 0,
      top: 130
    }
  },
  decoWrap: {
    width: '100%',
    height: '100%'
  },
  top: {},
  bottom: {},
  s1: {},
  s2: {},
  s3: {},
  deco: {
    borderRadius: 80,
    transform: 'rotate(45deg)',
    position: 'absolute',
    opacity: 0.3,
    [`&.${classes.top}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 800,
      height: 800,
      [`&.${classes.s1}`]: {
        top: -400,
        right: -250
      },
      [`&.${classes.s2}`]: {
        top: -400,
        left: -250
      },
      [`&.${classes.s3}`]: {
        top: -360,
        left: 150
      }
    },
    [`&.${classes.bottom}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      width: 790,
      height: 815,
      [`&.${classes.s1}`]: {
        top: -390,
        right: -240
      },
      [`&.${classes.s2}`]: {
        top: -390,
        left: -240
      },
      [`&.${classes.s3}`]: {
        top: -360,
        left: 150
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
