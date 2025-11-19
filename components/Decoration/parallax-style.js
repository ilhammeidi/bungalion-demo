import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 700,
    width: '50%',
    position: 'absolute',
    display: 'block',
    opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
  },
  obj: {
    position: 'relative'
  },
  small: {
    filter: 'blur(5px) drop-shadow(20px -25px 10px rgba(0, 0, 0, 0.3))'
  },
  left: {
    top: -50,
    [`& .${classes.big}`]: {
      width: 400,
      left: -250,
      height: 400,
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -200,
      left: -50
    },
  },
  top: {
    top: 350,
    right: -400,
    [`& .${classes.big}`]: {
      width: 250,
      height: 250,
      left: 100,
    },
    [`& .${classes.small}`]: {
      width: 70,
      height: 100,
      top: -200,
      left: 80
    },
  },
  bottom: {
    top: 500,
    left: -150,
    [`& .${classes.big}`]: {
      width: 200,
      left: 0,
      height: 200,
    },
    [`& .${classes.small}`]: {
      width: 50,
      height: 50,
      top: -100,
      left: 180
    },
  },
  end: {
    top: 600,
    right: -400,
    [`& .${classes.big}`]: {
      width: 314,
      height: 314,
      left: 100,
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -250,
      left: 80
    },
  },
  start: {
    top: 1050,
    left: -150,
    [`& .${classes.big}`]: {
      width: 300,
      left: -30,
      height: 300,
      transform: 'rotate(-45deg)'
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -200,
      left: 220,
      transform: 'rotate(-60deg)'
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
