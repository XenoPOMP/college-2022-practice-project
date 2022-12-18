export interface ButtonProps {
  children?: string;
  className?: string;
  link?: {
    href: string,
  };
  callback?: () => void
  scroll?: {}
}
