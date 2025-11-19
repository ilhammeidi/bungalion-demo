import React from 'react';
import PropTypes from 'prop-types';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './logo-style';

function Logo(props) {
  const { classes: text } = useText();
  const { classes, cx } = useStyles();
  const { type, size } = props;
  return (
    <span className={cx(classes[type], classes.logo, classes[size])}>
      <img src={brand.agency.img} alt="logo" />
      <span className={size == 'small' ? text.subtitle : text.title2}>
        { type !== 'only' ? brand.agency.name : '' }
      </span>
    </span>
  );
}

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string
};

Logo.defaultProps = {
  size: 'medium'
};

export default Logo;
