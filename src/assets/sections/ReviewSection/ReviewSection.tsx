import React from 'react';
import Section from '../../components/Section/Section';
import styles from './ReviewSection.module.scss';
import cn from 'classnames';
import Review from '../../components/Review/Review';

const ReviewSection = () => {
  return (
    <Section className={cn(styles.section)}>
      <h2>отзывы</h2>

      <Review
        author={'Наумов Александр'}
        message={
          'Привет! Я ваш единственный клиент. Все это время я заходил под разными именами и оставлял отзывы. Сейчас зайду со всех аккаунтов и напишу.'
        }
      />

      <Review
        author={'Глеб Уйманов'}
        message={
          'Привет! Я ваш единственный клиент. Все это время я заходил под разными именами и оставлял отзывы. Сейчас зайду со всех аккаунтов и напишу.'
        }
      />

      <Review
        author={'Никита Козюлин'}
        message={
          'Привет! Я ваш единственный клиент. Все это время я заходил под разными именами и оставлял отзывы. Сейчас зайду со всех аккаунтов и напишу.'
        }
      />
    </Section>
  );
};

export default ReviewSection;
