import React from 'react';
import Section from '../../components/Section/Section';
import styles from './AboutSection.module.scss';
import cn from 'classnames';
import RoundPhoto, {
  MotionRoundPhoto,
} from '../../components/RoundPhoto/RoundPhoto';
import womanImg from '../../images/about_woman_looking.png';
import Button from '../../components/Button/Button';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const defaultTransition = {
    duration: 1,
    ease: 'easeOut',
  };

  return (
    <Section className={cn(styles.section)} grid={{ rows: 10 }}>
      <h2>Наша компания предоставляет услуги генерального подрядчика</h2>

      <MotionRoundPhoto
        className={{ container: cn(styles.photo) }}
        src={womanImg}
        initial={{ x: '50%' }}
        whileInView={{ x: '0' }}
        transition={{
          duration: defaultTransition.duration,
          ease: defaultTransition.ease,
        }}
      />

      <Button className={cn(styles.button)}>Узнать больше</Button>

      <motion.div
        className={cn(styles.orangeBlock)}
        initial={{ y: '50%' }}
        whileInView={{ y: '0' }}
        transition={{
          duration: defaultTransition.duration,
          ease: defaultTransition.ease,
        }}
      >
        <h3>длинный Заголовок, очень длинный заголовок</h3>

        <div className={cn(styles.content)}>
          Et ultrices neque ornare aenean euismod. Cursus euismod quis viverra
          nibh cras pulvinar mattis nunc. Hendrerit dolor magna eget est.
          Sollicitudin nibh sit amet commodo nulla. Consequat id porta nibh
          venenatis cras sed. Nulla malesuada pellentesque elit eget. Augue
          lacus viverra vitae congue. Consequat id porta nibh venenatis cras
          sed. Nulla malesuada pellentesque elit eget. Augue lacus viverra vitae
          congue. Consequat id porta nibh venenatis cras sed. Nulla malesuada
          pellentesque elit eget. Augue lacus viverra vitae congue.{' '}
        </div>
      </motion.div>

      <div className={cn(styles.underPhotoText)}>
        Orci a scelerisque purus semper eget duis at tellus. Odio facilisis
        mauris sit amet massa vitae tortor condimentum lacinia. Magna sit amet
        purus gravida quis. Vel elit scelerisque mauris pellentesque pulvinar
        pellentesque. Ridiculus mus mauris vitae ultricies leo integer
        malesuada. Amet purus gravida quis blandit turpis cursus.Orci a
        scelerisque purus semper eget duis at tellus. Odio facilisis mauris sit
        amet massa vitae tortor condimentum lacinia. Magna sit amet purus
        gravida quis. Vel elit scelerisque mauris pellentesque pulvinar
        pellentesque. Ridiculus mus mauris vitae ultricies leo integer
        malesuada. Amet purus gravida quis blandit turpis cursus.Orci a
        scelerisque purus semper eget duis at tellus. Odio facilisis mauris sit
        amet massa vitae tortor condimentum lacinia. Magna sit amet purus
      </div>
    </Section>
  );
};

export default AboutSection;
