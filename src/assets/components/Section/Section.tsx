import { CSSProperties, FC, useEffect } from 'react';
import { SectionProps } from './Section.props';
import styles from './Section.module.scss';
import cn from 'classnames';

const Section: FC<SectionProps> = ({ children, className, grid }) => {
  const getGridSize = () : CSSProperties => {
    let gridSx = {};

    if (grid) {
      if (grid.rows) gridSx = {...gridSx, '--grid-row-count': grid.rows}

      if (grid.cols) gridSx = {...gridSx, '--grid-column-count': grid.cols}
    }

    return gridSx as CSSProperties;
  }

  useEffect(() => {
    getGridSize();
  }, [])

  return (
    <section className={cn(styles.uiSection, className)} style={getGridSize()}>
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
};

export default Section;
