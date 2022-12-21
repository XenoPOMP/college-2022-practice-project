import React from 'react';
import Section from '../../components/Section/Section';
import cn from 'classnames';
import styles from './EarningSinceSection.module.scss';
import Button from '../../components/Button/Button';
import earningMan from '../../images/earning_since_man.png';
import RoundPhoto from '../../components/RoundPhoto/RoundPhoto';

const EarningSinceSection = () => {
  return (
    <Section
      className={cn(styles.section)}
      grid={{
        rows: 7,
      }}
    >
      <div className={cn(styles.since)}>
        <h2>Мы завоевываем доверие наших клиентов с 2013 года</h2>

        <Button className={cn(styles.button)}>свяжитесь с нами</Button>
      </div>

      <div className={cn(styles.circle, styles.orange)}></div>

      <div className={cn(styles.circle, styles.photo)}></div>

      <RoundPhoto
        src={earningMan}
        className={{ container: cn(styles.roundPhoto) }}
      />
    </Section>
  );
};

export default EarningSinceSection;
