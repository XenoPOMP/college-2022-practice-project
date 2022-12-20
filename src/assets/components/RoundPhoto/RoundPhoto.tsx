import { FC } from 'react';
import { RoundDirection, RoundPhotoProps } from './RoundPhoto.props';
import cn from 'classnames';
import styles from './RoundPhoto.module.scss';

const RoundPhoto: FC<RoundPhotoProps> = ({ src, className, direction }) => {
  const getDirectionStyle = () => {
    switch (direction) {
      case RoundDirection.left:
        return cn(styles.left);
      case RoundDirection.right:
        return cn(styles.right);
    }
  };

  return (
    <div
      className={cn(styles.round, className?.container, getDirectionStyle())}
    >
      {src && <img src={src} className={className?.image} />}
    </div>
  );
};

export default RoundPhoto;
