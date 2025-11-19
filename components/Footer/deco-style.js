import { makeStyles } from 'tss-react/mui';

const deco = {
  borderRadius: 20,
  transform: 'rotate(45deg)',
  position: 'absolute',
  opacity: 0.2
};

const useStyles = makeStyles({ uniqId: 'footer_decoration' })((theme, _params, classes) => ({
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
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
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  leftDeco: {
    position: 'absolute',
    left: 0,
    [`& .${classes.big}`]: {
      left: 80,
      top: 200
    },
    [`& .${classes.small}`]: {
      left: 0,
      top: 130
    }
  },
  rightDeco: {
    position: 'absolute',
    right: 0,
    [`& .${classes.big}`]: {
      right: 50,
      top: 190
    },
    [`& .${classes.small}`]: {
      right: 0,
      top: 140
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
