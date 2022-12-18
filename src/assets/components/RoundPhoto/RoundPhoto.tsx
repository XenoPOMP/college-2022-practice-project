import { CSSProperties, FC, useRef } from 'react';
import { RoundPhotoProps } from './RoundPhoto.props';
import cn from 'classnames';
import styles from './RoundPhoto.module.scss';

const RoundPhoto: FC<RoundPhotoProps> = ({ photo, className, round }) => {
  const blockRef = useRef(null);

  const getRoundedStyles = () => {
    switch (round) {
      case 'left': {
        return cn(styles.left);
      }
      case 'right': {
        return cn(styles.right);
      }
      default: {
        return cn(styles.left);
      }
    }
  };

  return (
    <div
      ref={blockRef}
      className={cn(styles.round, className, getRoundedStyles())}
    >
      {photo.src && <img src={photo.src} />}
    </div>
  );
};

export default RoundPhoto;
