import { makeStyles } from 'tss-react/mui';

const sliderStyle = makeStyles({ uniqId: 'slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: -10
    }
  },
  cur: {},
  decoWrap: {
    width: '100%',
    height: '100%',
    transition: 'all 1s cubic-bezier(0, -0.01, 0, 0.96)',
    transform: 'translateX(-50px) scale(0.8)',
    opacity: 0,
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      top: -120
    }
  },
  deco: {
    borderRadius: 80,
    transform: 'rotate(45deg)',
    position: 'absolute',
    [`&.${classes.top}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 800,
      height: 800,
      [`&.${classes.s1}`]: {
        top: -400,
        right: -250,
      },
      [`&.${classes.s2}`]: {
        top: -400,
        left: -250
      },
      [`&.${classes.s3}`]: {
        top: -360,
        left: 150,
        [theme.breakpoints.down('md')]: {
          top: -400
        },
        [theme.breakpoints.down('sm')]: {
          left: -120
        }
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
        left: 150,
        [theme.breakpoints.down('sm')]: {
          left: -140
        }
      }
    }
  },
  slider: {
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    position: 'relative',
    '& img': {
      margin: '80px auto 0',
      maxWidth: '100%'
    },
    [`&.${classes.cur}`]: {
      [`& .${classes.decoWrap}`]: {
        transform: 'translateX(0px) scale(1)',
        opacity: 0.3,
      }
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('lg')]: {
      [`&.${classes.centerContent}`]: {
        paddingTop: theme.spacing(5)
      }
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      height: 'auto',
      padding: theme.spacing(15, 0, 5),
      '& img': {
        marginTop: `${theme.spacing(5)} !important`
      }
    },
    [theme.breakpoints.between('sm', 'md')]: {
      '& img': {
        width: '40%',
      }
    }
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        width: '60%'
      },
      [theme.breakpoints.up('md')]: {
        width: '40%'
      }
    }
  },
  sliderDeco: {
    position: 'absolute !important',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& div[class*="slick-list"]': {
      [theme.breakpoints.down('md')]: {
        height: '100%'
      }
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    direction: 'ltr',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  button: {},
  btnArea: {
    [`& .${classes.button}`]: {
      width: 200,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3)
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:after': {
      content: '""',
      borderBottom: '6px solid #fff',
      borderRadius: 6,
      width: '0%',
      position: 'absolute',
      bottom: -12,
      left: -2,
      transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
      transformOrigin: 'left center',
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: 'none',
      '&:after': {
        width: '50%',
        left: 10,
        borderBottomColor: theme.palette.primary.main
      }
    },
    [`&.${classes.active}`]: {
      '& strong': {
        color: theme.palette.primary.main
      },
      '&:after': {
        width: '50%',
        left: 9,
        borderBottomColor: theme.palette.primary.main
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
