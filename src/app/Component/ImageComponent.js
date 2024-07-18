// ImageComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../util/them';

const ImageComponent = ({ src, alt, width, height, className, style, ...props }) => {
  return (
    <img
      src={src?src:Image.Logo}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      {...props}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
};

ImageComponent.defaultProps = {
  alt: 'Image',
  width: 'auto',
  height: 'auto',
  className: '',
  style: {},
};

export default ImageComponent;
