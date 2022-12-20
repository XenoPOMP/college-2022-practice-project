import { CSSProperties, FC } from 'react';
import { RoundPhotoProps } from './RoundPhoto.props';
import cn from 'classnames';
import styles from './RoundPhoto.module.scss';

const RoundPhoto: FC<RoundPhotoProps> = ({ src, className, fullWidth, fullHeight }) => {

  const getImageStyles = () : CSSProperties => {
    const imgSx = {} as CSSProperties;

    if (fullWidth) {
      imgSx.width = '100%';
    }

    if (fullHeight) {
      imgSx.height = '100%';
    }

    return imgSx;
  }

  return (
    <div
      className={cn(styles.round, className?.container)}
    >
      {src && <img src={src} className={className?.image} style={getImageStyles()} />}
    </div>
  );
};

export default RoundPhoto;
