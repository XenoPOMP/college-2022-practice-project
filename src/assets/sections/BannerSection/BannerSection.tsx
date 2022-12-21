import React from 'react';
import Section from '../../components/Section/Section';
import styles from './BannerSection.module.scss';
import cn from 'classnames';
import Button from '../../components/Button/Button';
import { motion } from 'framer-motion';

const BannerSection = () => {
  return (
    <Section className={cn(styles.section)}>
      <motion.div
        className={cn(styles.box)}
        initial={{ x: '-25%', opacity: 0.15 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2>Наши услуги</h2>

        <div className={cn(styles.text)}>
          Massa id neque aliquam vestibulum morbi blandit cursus risus. Amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Sagittis
          id consectetur purus ut faucibus pulvinar elementum integer. Bibendum
          neque egestas congue quisque egestas diam.
        </div>

        <Button className={cn(styles.button)}>Узнать больше</Button>
      </motion.div>
    </Section>
  );
};

export default BannerSection;
