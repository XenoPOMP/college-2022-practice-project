import React from 'react';
import Section from '../../components/Section/Section';
import styles from './FactsSection.module.scss';
import cn from 'classnames';
import RoundPhoto from '../../components/RoundPhoto/RoundPhoto';
import manLookingFull from '../../images/Daily-Report.jpg';

const FactsSection = () => {
  return (
    <Section className={cn(styles.section)}>
      <RoundPhoto
        src={manLookingFull}
        className={{ container: cn(styles.photo), image: cn(styles.image) }}
      />
    </Section>
  );
};

export default FactsSection;
