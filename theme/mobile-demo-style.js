import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'mobile' })((theme, _params, classes) => ({
  header: {
    position: 'relative',
    display: 'block',
    height: 50,
    background: theme.palette.primary.dark
  },
  link: {
    color: theme.palette.secondary.main
  },
  fullScreenContainer: {
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
    [theme.breakpoints.up('lg')]: {
      backgroundSize: 'cover',
    }
  },
  phoneWrap: {
    height: '100vh',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      height: 'calc(100vh - 120px)',
      overflow: 'hidden'
    },
  },
  noscroll: {
    overflow: 'hidden'
  },
  phoneFrame: {
    [theme.breakpoints.down('lg')]: {
      height: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
      background: '#000',
      borderRadius: 40,
      boxShadow: theme.shadows[10],
      width: 430 + 16 * 2,
      margin: `${theme.spacing(4)} auto`,
      transformOrigin: 'top center',
      transition: 'all 0.3s ease-out',
      [`&.${classes.small}`]: {
        transform: 'scale(0.5)',
      },
      [`&.${classes.medium}`]: {
        transform: 'scale(0.75)',
      },
      [`&.${classes.large}`]: {
        transform: 'scale(1)',
      }
    },
  },
  phoneContent: {
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      overflow: 'hidden',
      background: 'grey',
      borderRadius: 32,
      width: 430,
      height: 932,
    },
    '& iframe': {
      border: 'none'
    }
  },
  optZoom: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiButtonGroup-root': {
      background: 'transparentb',
      marginTop: theme.spacing(2)
    }
  },
  btnCta: {
    '& .MuiButton-root': {
      fontSize: 11
    },
    '& .MuiSvgIcon-root': {
      width: 16
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
