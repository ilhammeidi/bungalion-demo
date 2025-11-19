import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

function Line(props) {
  const { classes } = useStyles();

  return (
    <div className={classes.line}>
      <div className={classes.deco}>
        <svg className={classes.primary}>
          <use xlinkHref="/images/decoration/wave.svg#main" />
        </svg>
        <svg className={classes.secondary}>
          <use xlinkHref="/images/decoration/wave.svg#main" />
        </svg>
      </div>
    </div>
  );
}

export default Line;
