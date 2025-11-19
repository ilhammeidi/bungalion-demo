import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ButtonBase from '@mui/material/ButtonBase';
import { useTranslation } from 'next-i18next';
import useStyles from './product-card-style';

function ProductCard(props) {
  const { classes, cx } = useStyles();
  const {
    img,
    title,
    desc,
    orientation,
    type,
    rating,
    price,
    href,
  } = props;
  const { t } = useTranslation('common');

  return (
    <Card className={cx(classes.cardProduct, classes[orientation], classes[type])}>
      <ButtonBase focusRipple href={href} target="_blank" className={classes.hiddenLink}>&nbsp;</ButtonBase>
      <CardMedia
        className={classes.mediaProduct}
        image={img}
        title={title}
        component="figure"
      />
      <div className={classes.desc}>
        <div className={classes.text}>
          <Typography noWrap gutterBottom variant="h6" className={classes.title} component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {desc}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  href: PropTypes.string,
};

ProductCard.defaultProps = {
  type: 'full', // available props: full, rounded, over, oval
  rating: 0,
  price: 0,
  orientation: 'portrait',
  href: '#',
};

export default ProductCard;
