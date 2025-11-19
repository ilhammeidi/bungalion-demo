import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './expertise-style';
import TitleDeco from '../../Title/WithDecoration';

function Expertise() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translate Function
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container justifyContent="center" spacing={6}>
          <Grid item md={4} xs={12}>
            <div className={classes.titleDeco}>
              {isDesktop && (
                <svg
                  fill="#cccccc"
                  width={845}
                  height={1099}
                  className={classes.decoration}
                >
                  <use xlinkHref="/images/agency/wave_decoration.svg#main" />
                </svg>
              )}
              <TitleDeco text={t('agency-landing.expertise_title')} />
              <ScrollAnimation animateOnce animateIn="zoomInShort" offset={-50} delay={300} duration={0.3}>
                <div className={classes.illustrationWrap}>
                  <div>
                    <span className={classes.iconGreen} />
                  </div>
                  <div>
                    <span className={classes.iconViolet} />
                  </div>
                  <div>
                    <span className={classes.iconBlue} />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </Grid>
          <Grid item lg={7} md={8} xs={12}>
            <h4 className={text.subtitle}>
              {t('agency-landing.expertise_subtitle')}
            </h4>
            <p className={cx(classes.desc, text.paragraph)}>
              {t('agency-landing.expertise_paragraph')}
            </p>
            <div className={classes.list}>
              <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                  <div className={cx(classes.descIcon, classes.iconPrimary)}>
                    <Icon className={classes.icon}>check_circle_outline</Icon>
                  </div>
                  <h3 className={text.subtitle}>Nulla lobortis nunc</h3>
                  <p className={text.paragraph}>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={cx(classes.descIcon, classes.iconSecondary)}>
                    <Icon className={classes.icon}>gps_fixed</Icon>
                  </div>
                  <h3 className={text.subtitle}>Vestibulum faucibus</h3>
                  <p className={text.paragraph}>In id nisi id neque venenatis molestie Quisque lacinia purus ut libero facilisis.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={cx(classes.descIcon, classes.iconAccent)}>
                    <Icon className={classes.icon}>speed</Icon>
                  </div>
                  <h3 className={text.subtitle}>Suspendisse porttitor</h3>
                  <p className={text.paragraph}>Unc quis sem quis velit tincidunt congue a sit amet ante.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={cx(classes.descIcon, classes.iconAccent2)}>
                    <Icon className={classes.icon}>emoji_objects</Icon>
                  </div>
                  <h3 className={text.subtitle}>Ut sed eros</h3>
                  <p className={text.paragraph}>In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Expertise;
