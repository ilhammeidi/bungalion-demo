import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);
  const sliderDeco = useRef(null);
  const [deco, setDeco] = useState(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptionsDeco = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    fade: true,
    cssEase: 'ease-out',
    autoplay: false
  };

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  useEffect(() => {
    setDeco(sliderDeco.current);
  }, []);

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        <Carousel
          className={classes.sliderDeco}
          {...slickOptionsDeco}
          ref={sliderDeco}
        >
          <div className={cx(classes.slide, curSlide === 0 ? classes.cur : '')}>
            <div className={classes.inner}>
              <div className={classes.decoWrap}>
                <div className={cx(classes.deco, classes.bottom, classes.s1)}>&nbsp;</div>
                <div className={cx(classes.deco, classes.top, classes.s1)}>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className={cx(classes.slide, curSlide === 1 ? classes.cur : '')}>
            <div className={classes.inner}>
              <div className={classes.decoWrap}>
                <div className={cx(classes.deco, classes.bottom, classes.s2)}>&nbsp;</div>
                <div className={cx(classes.deco, classes.top, classes.s2)}>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className={cx(classes.slide, curSlide === 2 ? classes.cur : '')}>
            <div className={classes.inner}>
              <div className={classes.decoWrap}>
                <div className={cx(classes.deco, classes.bottom, classes.s3)}>&nbsp;</div>
                <div className={cx(classes.deco, classes.top, classes.s3)}>&nbsp;</div>
              </div>
            </div>
          </div>
        </Carousel>
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          asNavFor={deco}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container alignItems="center">
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('agency-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('agency-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button variant="outlined" size="large" color="primary" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.agency.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.agency[11]}
                        className="img-2d3d"
                        data-2d={imgAPI.agency[10]}
                        data-3d={imgAPI.agency[11]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.agency[13]}
                        className="img-2d3d"
                        data-2d={imgAPI.agency[12]}
                        data-3d={imgAPI.agency[13]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('agency-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('agency-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button variant="outlined" size="large" color="primary" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.agency.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={cx(classes.slide, classes.centerContent)}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ md: 12 }}>
                      <div className={cx(classes.text, align.textCenter)}>
                        <h4 className={text.title}>
                          {t('agency-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('agency-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button variant="outlined" size="large" color="primary" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.agency.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.img, classes.hBanner)}>
                      <img
                        src={imgAPI.agency[15]}
                        className="img-2d3d"
                        data-2d={imgAPI.agency[14]}
                        data-3d={imgAPI.agency[15]}
                        alt="banner 3 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden mdDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

export default BannerSlider;
