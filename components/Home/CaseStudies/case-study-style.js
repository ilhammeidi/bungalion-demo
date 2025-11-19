import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'case_study' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    '& nav': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        overflow: 'auto'
      }
    }
  },
  filter: {
    borderRadius: theme.rounded.small,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.down('md')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark,
  },
  massonry: {
    '& button': {
      width: '100%'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
