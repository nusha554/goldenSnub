// Component Props Types
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

// Animation Types
export interface AnimationVariants {
  initial: object;
  animate: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
}

// Hook Types
export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}

export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

// Time Types
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Section Types
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

// Color Theme Types
export interface ColorTheme {
  lightBlue: string;
  cream: string;
  warmBrown: string;
  goldenYellow: string;
}

// Social Link Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Animation Configuration
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  type?: string;
  stiffness?: number;
}

// Component State Types
export interface ComponentState {
  isVisible: boolean;
  isAnimating: boolean;
}

// Event Handler Types
export type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type ScrollHandler = (event: Event) => void;
export type AnimationCompleteHandler = () => void;
