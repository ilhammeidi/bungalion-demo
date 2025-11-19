import { makeStyles } from 'tss-react/mui';

const deco = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  bottom: 0,
  left: 0,
};

const type = {
  borderRadius: 40,
  transform: 'rotate(45deg)',
  position: 'absolute',
  opacity: 0.2
};

const decorationStyles = makeStyles({ uniqId: 'decoration' })((theme, _params, classes) => ({
  small: {
    ...type,
    width: 280,
    height: 280,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
  },
  big: {
    ...type,
    width: 400,
    height: 400,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  leftDeco: {
    position: 'absolute'
  },
  rightDeco: {
    position: 'absolute'
  },
  formDeco: {
    ...deco,
    [`& .${classes.leftDeco}`]: {
      left: -200,
      top: 400,
      [`& .${classes.big}`]: {
        left: 80,
        top: 200
      },
      [`& .${classes.small}`]: {
        left: 0,
        top: 130
      }
    },
    [`& .${classes.rightDeco}`]: {
      right: -50,
      top: -400,
      [`& .${classes.big}`]: {
        right: 50,
        top: 190
      },
      [`& .${classes.small}`]: {
        right: 0,
        top: 140
      }
    }
  },
  pageDeco: {
    ...deco,
    [`& .${classes.leftDeco}`]: {
      left: -200,
      top: -200,
      [`& .${classes.big}`]: {
        left: 80,
        top: 200
      },
      [`& .${classes.small}`]: {
        left: 0,
        top: 130
      }
    },
    [`& .${classes.rightDeco}`]: {
      right: -50,
      top: 400,
      [`& .${classes.big}`]: {
        right: 50,
        top: 190
      },
      [`& .${classes.small}`]: {
        right: 0,
        top: 140
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
