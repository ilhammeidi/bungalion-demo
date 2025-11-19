import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo';
import link from '~/public/text/link';
import Settings from './TopNav/Settings';
import useStyles from './header-style';

function Basic(props) {
  const [fixed, setFixed] = useState(false);
  const { classes, cx } = useStyles();
  // Media QUery
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const {
    text,
    href,
    handleShowOption
  } = props;
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="relative"
      id="header"
      className={cx(
        classes.header,
        fixed && classes.fixed,
      )}
    >
      <Container fixed={isDesktop}>
        <div className={classes.headerContent}>
          <nav className={cx(classes.navMenu, classes.flex)}>
            <div className={classes.logo}>
              <a href={link.agency.home}>
                <Logo type="landscape" size="small" />
              </a>
            </div>
          </nav>
          <nav className={classes.userMenu}>
            <ButtonGroup
              size="small"
              variant="contained"
              elevation="0"
              color="black"
            >
              <Button href={href} target="_blank">
                <Box sx={{ px: 1 }}>
                  {text}
                </Box>
              </Button>
              <Button href="#" onClick={handleShowOption}>
                <MenuIcon sx={{ width: 16 }} />
              </Button>
            </ButtonGroup>
          </nav>
        </div>
      </Container>
    </AppBar>
  );
}

Basic.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  handleShowOption: PropTypes.func,
};

Basic.defaultProps = {
  href: '/',
  text: 'login',
  handleShowOption: () => {}
};

export default Basic;
