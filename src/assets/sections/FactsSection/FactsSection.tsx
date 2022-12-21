import Section, { MotionSection } from '../../components/Section/Section';
import styles from './FactsSection.module.scss';
import cn from 'classnames';
import RoundPhoto, {
  MotionRoundPhoto,
} from '../../components/RoundPhoto/RoundPhoto';
import manLooking from '../../images/facts_man_looking.png';
import { motion } from 'framer-motion';

const FactsSection = () => {
  type animationLayout = {
    hidden: {},
    visible: {},
  }


  const photoAnimation = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  } as animationLayout;

  const orangeAnim = {
    hidden: {opacity: 0, y: '-25%'},
    visible: {opacity: 1, y: '0%'},
  } as animationLayout;

  const blackAnim = {
    hidden: {opacity: 0, y: '25%'},
    visible: {opacity: 1, y: '0%'},
  } as animationLayout;

  const defaultTransition = {
    duration: 1,
    ease: 'easeOut'
  }

  return (
    <MotionSection
      className={cn(styles.section)}
      initial={'hidden'}
      whileInView={'visible'}
    >
      <MotionRoundPhoto
        src={manLooking}
        className={{ container: cn(styles.photo), image: cn(styles.image) }}
        variants={photoAnimation}
        transition={{duration: defaultTransition.duration, ease: defaultTransition.ease}}
      />

      <div className={cn(styles.text)}>
        <div className={cn(styles.container)}>
          <motion.div
            className={cn(styles.block, styles.orangeBlock)}
            variants={orangeAnim}
            transition={{duration: defaultTransition.duration, ease: defaultTransition.ease, delay: 1}}
          >
            <h2>Заголовок</h2>

            <div className={cn(styles.content)}>
              Imperdiet dui accumsan sit amet nulla facilisi morbi tempus
              iaculis. Varius quam quisque id diam vel quam elementum. Sed
              euismod nisi porta lorem. Morbi tristique senectus et netus. Quis
              viverra nibh cras pulvinar. Velit aliquet sagittis id consectetur.
              Volutpat maecenas volutpat blandit aliquam etiam erat velit. Quis
              ipsum suspendisse ultrices gravida dictum fusce ut. Eget mauris
              pharetra et ultrices. Quis vel eros donec ac odio tempor orci
              dapibus ultrices.
            </div>
          </motion.div>
          <motion.div
            className={cn(styles.block, styles.orangeBlockText)}
            variants={orangeAnim}
            transition={{duration: defaultTransition.duration, ease: defaultTransition.ease, delay: 1}}
          >
            Nisl nisi scelerisque eu ultrices. Lobortis scelerisque fermentum
            dui faucibus in ornare quam viverra. Fringilla ut morbi tincidunt
            augue interdum velit euismod in. Dolor magna eget est lorem ipsum.
            Dui faucibus in ornare quam viverra orci sagittis. Aliquet lectus
            proin nibh nisl. Non blandit massa enim nec dui nunc mattis enim ut.
            Quis enim lobortis scelerisque fermentum dui. Fames ac turpis
            egestas integer eget aliquet nibh praesent tristique.
          </motion.div>
          <motion.div
            className={cn(styles.block, styles.blackBlockText)}
            variants={blackAnim}
            transition={{duration: defaultTransition.duration, ease: defaultTransition.ease, delay: 2}}
          >
            <span>
              Nisl nisi scelerisque eu ultrices. Lobortis scelerisque fermentum
              dui faucibus in ornare quam viverra. Fringilla ut morbi tincidunt
              augue interdum velit euismod in. Dolor magna eget est lorem ipsum.
              Dui faucibus in ornare quam viverra orci sagittis. Aliquet lectus
              proin nibh nisl. Non blandit massa enim nec dui nunc mattis enim
              ut. Quis enim lobortis scelerisque fermentum dui. Fames ac turpis
              egestas integer eget aliquet nibh praesent tristique.
            </span>
          </motion.div>
          <motion.div
            className={cn(styles.block, styles.blackBlock)}
            variants={blackAnim}
            transition={{duration: defaultTransition.duration, ease: defaultTransition.ease, delay: 2}}
          >
            <h2>Заголовок, но без капса</h2>

            <div className={cn(styles.content)}>
              Orci a scelerisque purus semper eget duis at tellus. Odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia.
              Magna sit amet purus gravida quis. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque. Ridiculus mus mauris vitae
              ultricies leo integer malesuada. Amet purus gravida quis blandit
              turpis cursus.
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
};

export default FactsSection;
