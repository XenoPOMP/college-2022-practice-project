import { ReactChildrenProps } from '../../interfaces/ReactChildren.props';
import { CSSProperties } from 'react';

export interface SectionProps extends ReactChildrenProps {
  className?: string;
  grid?: {
    rows?: number,
    cols?: number,
  };
  sx?: CSSProperties;
}
