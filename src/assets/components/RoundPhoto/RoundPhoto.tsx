import { CSSProperties, FC, useRef } from 'react';
import { RoundPhotoProps } from './RoundPhoto.props';
import cn from 'classnames';
import styles from './RoundPhoto.module.scss';

const RoundPhoto: FC<RoundPhotoProps> = ({ src, className }) => {
  return (
    <div className={cn(styles.round, className?.container)}>
      {src && <img src={src} className={className?.image} />}
    </div>
  );
};

export default RoundPhoto;
