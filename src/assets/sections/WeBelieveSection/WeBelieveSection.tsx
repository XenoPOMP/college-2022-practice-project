import React from 'react';
import Section from '../../components/Section/Section';
import styles from './WeBelieveSection.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import cloudyCity from '../../images/cloudy_city.png';
import RoundPhoto, {
  MotionRoundPhoto,
} from '../../components/RoundPhoto/RoundPhoto';
import Button from '../../components/Button/Button';

const WeBelieveSection = () => {
  const defaultTransition = {
    duration: 1,
    ease: 'easeOut',
  };

  return (
    <Section className={cn(styles.section)}>
      <MotionRoundPhoto
        src={cloudyCity}
        className={{ container: cn(styles.photo) }}
        initial={{ x: '-50%' }}
        whileInView={{ x: 0 }}
        transition={{
          duration: defaultTransition.duration,
          ease: defaultTransition.ease,
        }}
      />

      <motion.div
        className={cn(styles.text)}
        initial={{ x: '50%' }}
        whileInView={{ x: 0 }}
        transition={{
          duration: defaultTransition.duration,
          ease: defaultTransition.ease,
        }}
      >
        <h2>
          Мы верим в инновационные, прогрессивные инженерные решения, которые
          отвечают вызовам и выражениям архитектуры
        </h2>

        <div className={cn(styles.underHeaderText)}>
          Feugiat pretium nibh ipsum consequat nisl vel pretium. Urna nec
          tincidunt praesent semper feugiat nibh sed pulvinar. Sit amet massa
          vitae tortor condimentum lacinia. Mus mauris vitae ultricies leo
          integer. Et egestas quis ipsum suspendisse ultrices gravida. Congue
          mauris rhoncus aenean vel elit scelerisque mauris.
        </div>

        <div className={cn(styles.buttonPlaceholder)}>
          <Button className={cn(styles.button)}>Узнать больше</Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default WeBelieveSection;
