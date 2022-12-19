import { CSSProperties, FC, useRef } from 'react';
import { RoundPhotoProps } from './RoundPhoto.props';
import cn from 'classnames';
import styles from './RoundPhoto.module.scss';

const RoundPhoto: FC<RoundPhotoProps> = ({ src, className }) => {
  const blockRef = useRef(null);

  return (
    <div ref={blockRef} className={cn(styles.round, className?.container)}>
      {src && <img src={src} className={className?.image} />}
    </div>
  );
};

export default RoundPhoto;
