import React from 'react';
import Section from '../../components/Section/Section';
import styles from './FactsSection.module.scss';
import cn from 'classnames';

const FactsSection = () => {
  return <Section className={cn(styles.section)}>Facts</Section>;
};

export default FactsSection;
