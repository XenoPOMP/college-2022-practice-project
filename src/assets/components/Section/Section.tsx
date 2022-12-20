import { CSSProperties, FC } from 'react';
import { SectionProps } from './Section.props';
import styles from './Section.module.scss';
import cn from 'classnames';

const Section: FC<SectionProps> = ({ children, className, grid }) => {
  return (
    <section className={cn(styles.uiSection, className)}>
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
};

export default Section;
