import React from 'react';
import notFound from 'assets/notFound.png';
import NextImage, {
  StaticImageData,
  ImageProps as NextImageProps,
} from 'next/image';

type ImageProps = {
  fallback?: string | StaticImageData;
} & NextImageProps;

export function Image({ src, alt, fallback = notFound, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = React.useState(src);
  const onError = () => setImgSrc(fallback);

  return <NextImage src={imgSrc} onError={onError} alt={alt} {...props} />;
}
