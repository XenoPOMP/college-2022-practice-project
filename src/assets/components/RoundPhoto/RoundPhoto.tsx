import { FC, forwardRef, Ref } from 'react';
import { RoundPhotoProps } from './RoundPhoto.props';
import cn from 'classnames';
import styles from './RoundPhoto.module.scss';
import { motion } from 'framer-motion';

const RoundPhoto: FC<RoundPhotoProps> = forwardRef(
  ({ src, className }, ref) => {
    return (
      <div className={cn(styles.round, className?.container)} ref={ref as Ref<any>}>
        {src && <img src={src} className={className?.image} />}
      </div>
    );
  },
);

export const MotionRoundPhoto = motion(RoundPhoto);

export default RoundPhoto;
