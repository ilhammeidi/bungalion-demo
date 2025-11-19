import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter_landing' })((theme, _params, classes) => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
    '& svg': {
      width: 80,
      height: 80,
      fill: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(2),
      }
    },
    [`& .${classes.text}`]: {
      '& h4': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        fontWeight: 'bold',
      }
    }
  },
  dark: {
    background: theme.palette.primary.main,
    [`& .${classes.counterItem}`]: {
      color: theme.palette.common.white,
      '& svg': {
        fill: theme.palette.common.white,
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
