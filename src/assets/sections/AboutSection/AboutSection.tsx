import React from 'react';
import Section from '../../components/Section/Section';
import styles from './AboutSection.module.scss';
import cn from 'classnames';

const AboutSection = () => {
  return <Section className={cn(styles.section)}>About</Section>;
};

export default AboutSection;
