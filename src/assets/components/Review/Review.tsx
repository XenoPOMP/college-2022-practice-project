import styles from './Review.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { ReviewProps } from './Review.props';

const Review: FC<ReviewProps> = ({ avatarImgSrc, author, message }) => {
  return (
    <div className={cn(styles.review)}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.avatarBlock)}>
          <div className={cn(styles.avatar)}></div>
        </div>

        <div className={cn(styles.body)}>
          <h3>{author ? author : 'Аноним'}</h3>

          <div className={cn(styles.content)}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
