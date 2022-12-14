import { CSSProperties, FC, useEffect, forwardRef, Ref } from 'react';
import { SectionProps } from './Section.props';
import styles from './Section.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const Section: FC<SectionProps> = forwardRef(({ children, className, grid, sx }, ref) => {
  const getSectionStyles = () : CSSProperties => {
    // Setup grid
    let gridSx = {};

    if (grid) {
      if (grid.rows) gridSx = {...gridSx, '--grid-row-count': grid.rows}

      if (grid.cols) gridSx = {...gridSx, '--grid-column-count': grid.cols}
    }

    // Merge grid styles and props styles
    gridSx = {...gridSx, ...sx};

    return gridSx as CSSProperties;
  }

  return (
    <section
      className={cn(styles.uiSection, className)}
      style={getSectionStyles()}
      ref={ref as Ref<any>}
    >
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
});

export const MotionSection = motion(Section);

export default Section;
