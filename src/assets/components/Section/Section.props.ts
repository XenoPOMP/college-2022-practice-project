import { ReactChildrenProps } from '../../interfaces/ReactChildren.props';

export interface SectionProps extends ReactChildrenProps {
  className?: string;
  grid?: {
    rows?: number,
    cols?: number,
  };
}
