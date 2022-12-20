export enum RoundDirection {
  left, right
}

export interface RoundPhotoProps {
  src?: string;
  className?: {
    container?: string,
    image?: string,
  };
  direction: RoundDirection;
}
