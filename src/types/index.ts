export interface ScrollSectionProps {
  children: React.ReactNode;
  className: string;
  [key: string]: any;
}

export interface CountdownTimerProps {
  launchDate?: Date;
}

export interface TokenomicsItem {
  icon: string;
  percentage: string;
  description: string;
}

export interface TokenomicsSectionProps {
  tokenomicsData?: TokenomicsItem[];
}

export interface AnimationVariants {
  initial: object;
  animate: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
}

export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}

export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type SectionType = 
  | 'hero'
  | 'welcome'
  | 'story'
  | 'tokenomics'
  | 'join'
  | 'footer';

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ColorTheme {
  lightBlue: string;
  cream: string;
  warmBrown: string;
  goldenYellow: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  type?: string;
  stiffness?: number;
}

export interface ComponentState {
  isVisible: boolean;
  isAnimating: boolean;
}

export type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type ScrollHandler = (event: Event) => void;
export type AnimationCompleteHandler = () => void;
