import React, { useState, Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AndroidIcon from '@mui/icons-material/Android';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HeaderBasic from '~/components/Header/Basic';
import ParallaxBall from '~/components/Decoration/ParallaxBall';
import ParallaxDouble from '~/components/Decoration/ParallaxDouble';
import Line from '~/components/Decoration/Line';
import ProductCard from '~/components/Cards/ProductCard';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Logo from '~/components/Logo';
import imgAPI from '~/public/images/imgAPI';
import { useTextAlign, useText } from '~/theme/common';
import useStyles from '~/theme/mobile-demo-style';
import brand from '~/public/text/brand';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const productLink = 'https://codecanyon.net/user/ilhammeidi/portfolio';
const apkLink = 'https://drive.google.com/drive/folders/106zzxbtjg90y5jXqdGEqwcPiHUXFIMgU?usp=sharing';
const githubLink = 'https://github.com/ilhammeidi/boxperia-starter';
const onlineDocsLink = 'https://ilhammeidi.github.io/verslion-docs/flutter-doc/index.html';
const appFrame = 'https://bungalion-app.vercel.app/';

function MoreAbout() {
  const { classes } = useStyles();
  
  return <Fragment>
    <Box sx={{py: 3}}>
      <Logo type="text" />
    </Box>
    <Typography align="left">
      Bungalion E-Wallet web version demo. This template built with <strong>Flutter</strong> and support for <strong>Android, iOS, and Mobile Web.</strong>
      You can get the Android Installer with APK file from link bellow.
    </Typography>
    <Box sx={{ py: 3 }}>
      <Button fullWidth size="large" target="_blank" href={productLink} variant="contained" color="primary">BUY NOW</Button>
    </Box>
    <Grid container spacing={1} className={classes.btnCta}>
      <Grid item xs={6}>
        <Button size="small" href={apkLink} target="_blank" fullWidth variant="outlined" color="primaryLight">
          <AndroidIcon sx={{ mr: 0.5 }} /> APK Installer
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button size="small" href={githubLink} target="_blank" fullWidth variant="outlined" color="primaryLight">
          <GitHubIcon sx={{ mr: 0.5 }} /> Try Free Version
        </Button>
      </Grid>
    </Grid>
    <br />
    <Grid container spacing={1} className={classes.btnCta}>
      <Grid item xs={6}>
        <Button size="small" fullWidth variant="outlined" color="primaryLight" target="_blank" href={onlineDocsLink}>
          <MenuBookIcon sx={{ mr: 0.5 }} /> Online Docs
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button size="small" fullWidth variant="outlined" color="primaryLight" target="_blank" href="https://themeforest.net/user/ilhammeidi">
          <PersonIcon sx={{ mr: 0.5 }} /> Contact Author
        </Button>
      </Grid>
    </Grid>
    <br />
    <Typography>
      If you need installer for iOS and installation guide, please contact the author:
      <br />
      <a className={classes.link} target="_blank" href="https://themeforest.net/user/ilhammeidi">https://themeforest.net/user/ilhammeidi</a>
    </Typography>
  </Fragment>
}

function LandingPage() {
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();

  // Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  // Zoom
  const [zoom, setZoom] = useState('medium');
  const handleZoom = (val) => {
    setZoom(val);
  }
  
  // Mobiel Option
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name + ' - Web Demo' }
        </title>
      </Head>
      <CssBaseline />
      {!isDesktop && (
        <div className={classes.header}>
          <HeaderBasic text="Buy Now" href={productLink} handleShowOption={handleClickOpen} />
        </div>
      )}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color="white" sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              More About Bungalion
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box p={2}>
          <MoreAbout />
        </Box>
      </Dialog>
      <div className={classes.fullScreenContainer}>
        {isDesktop && (
          <Fragment>
            <ParallaxDouble />
            <Line />
            <ParallaxBall />
          </Fragment>
        )}
        <Grid container spacing={0} justifyContent="center">
          {isDesktop && (
            <Grid item lg={3} xs={12}>
              <MoreAbout />
            </Grid>
          )}

          <Grid item lg={5} xs={12}>
            <div className={cx(classes.phoneWrap, zoom == 'small' && classes.noscroll)}>
              <div className={cx(classes.phoneFrame, classes[zoom])}>
                <div className={classes.phoneContent}>
                  <iframe  width="100%" height="100%" src={appFrame}></iframe>
                </div>
              </div>
            </div>
          </Grid>

          {isDesktop && (
            <Grid item lg={3} xs={12}>
              <div className={classes.optZoom}>
                <h3 className={text.subtitle}>
                  Zoom Options
                </h3>
                <ButtonGroup size="large" aria-label="Large button group">
                  <Button color="secondaryLight" onClick={() => handleZoom('small')} variant={zoom == 'small' ? 'contained' : 'outlined'}>Small (50%)</Button>
                  <Button color="secondaryLight" onClick={() => handleZoom('medium')} variant={zoom == 'medium' ? 'contained' : 'outlined'}>Medium (75%)</Button>
                  <Button color="secondaryLight" onClick={() => handleZoom('large')} variant={zoom == 'large' ? 'contained' : 'outlined'}>Large (100%)</Button>
                </ButtonGroup>
                <br />
                <Button
                  fullWidth
                  href={appFrame}
                  target="_blank"
                  size="large"
                  variant="outlined"
                  color="primaryLight"
                >
                  <FullscreenIcon />
                  &nbsp;
                  Show Full Screen
                </Button>
              </div>

              <Box mt={5}>
                <h3 className={cx(text.subtitle, align.textCenter)}>
                  More Products
                </h3>
                <br />
                <ProductCard
                  price={15}
                  img="https://s3.envato.com/files/644359635/logo80.jpg"
                  title="Boxperia"
                  desc="Flutter Hotel and Room Booking App Template"
                  orientation="landscape"
                  type="over"
                  href="https://codecanyon.net/item/boxperia-flutter-hotel-and-room-booking-app-ui-kit/59109506"
                />
                <br />
                <ProductCard
                  price={15}
                  img="https://s3.envato.com/files/633666758/logo80.jpg"
                  title="BookMyTix"
                  desc="Flutter Flight Booking App Template"
                  orientation="landscape"
                  type="over"
                  href="https://codecanyon.net/item/bookmytix-flutter-flight-booking-app-template/57827751"
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </div>
    </Fragment>
  );
}

export default LandingPage;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
