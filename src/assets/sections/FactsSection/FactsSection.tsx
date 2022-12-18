import React from 'react';
import Section from '../../components/Section/Section';
import styles from './FactsSection.module.scss';
import cn from 'classnames';
import RoundPhoto from '../../components/RoundPhoto/RoundPhoto';
import manLooking from '../../images/facts_man_looking.png';

const FactsSection = () => {
  return (
    <Section className={cn(styles.section)}>
      <RoundPhoto
        round={'left'}
        photo={{ src: manLooking }}
        className={cn(styles.photo)}
      />
    </Section>
  );
};

export default FactsSection;
