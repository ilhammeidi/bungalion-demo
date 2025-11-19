import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  button: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
    height: 48,
    fontSize: 18,
    '&:hover': {
      background: theme.palette.common.white,
    },
    [theme.breakpoints.up('sm')]: {
      height: 64,
      fontSize: 20,
    },
  },
  paper: {
    borderRadius: 24,
    color: theme.palette.common.white,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6, 10),
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 2),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0, 2)
      },
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
