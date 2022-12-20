import Section from '../../components/Section/Section';
import styles from './FactsSection.module.scss';
import cn from 'classnames';
import RoundPhoto from '../../components/RoundPhoto/RoundPhoto';
import manLookingFull from '../../images/Daily-Report.jpg';
import { RoundDirection } from '../../components/RoundPhoto/RoundPhoto.props';

const FactsSection = () => {
  return (
    <Section className={cn(styles.section)}>
      <RoundPhoto
        src={manLookingFull}
        className={{ container: cn(styles.photo), image: cn(styles.image) }}
        direction={RoundDirection.left}
      />

      <div className={cn(styles.text)}>
        <div className={cn(styles.container)}>
          <div className={cn(styles.block, styles.orangeBlock)}></div>
          <div className={cn(styles.block, styles.orangeBlockText)}></div>
          <div className={cn(styles.block, styles.blackBlockText)}></div>
          <div className={cn(styles.block, styles.blackBlock)}></div>
        </div>
      </div>
    </Section>
  );
};

export default FactsSection;
